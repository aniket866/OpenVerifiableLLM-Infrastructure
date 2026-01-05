import User from "../models/user.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../lib/utils.js";
import dns from "dns/promises";

async function signupController(req, res) {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    if (name.length < 3) {
      return res
        .status(400)
        .json({ message: "Name must be at least 3 characters" });
    }

    if (password.length > 50) {
      return res
        .status(400)
        .json({ message: "Password must be less than 50 characters" });
    }

    if (name.length > 30) {
      return res
        .status(400)
        .json({ message: "Name must be less than 30 characters" });
    }

    if (!/(?=.*[0-9])(?=.*[!@#$%^&*])/.test(password)) {
      return res.status(400).json({
        message:
          "Password must contain at least one number and one special character",
      });
    }

    let domain = email.split("@")[1];

    try {
      const mx = await dns.resolveMx(domain);
      if (!mx.length) {
        return res.status(400).json({ message: "Email domain does not exist" });
      }
    } catch (err) {
      console.warn("MX lookup failed:", err.message);
      return res.status(400).json({ message: "Invalid email domain" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Email already in use. Please login." });
    } 
    else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        username: name,
        email,
        password: hashedPassword,
      });

      const SavedUser = await newUser.save();
      generateToken(newUser._id, res);

        res.status(201).json({
        message: "User signed up successfully",
        user: {
          _id: newUser._id,
          name,
          email,
          profilePicture: newUser.profilePicture,
        },
      });
      try {
        const { sendWelcomeEmail } = await import(
          "../emails/emailHandler.js"
        );
        const clientURL = process.env.CLIENT_URL || "http://localhost:3000";
        await sendWelcomeEmail(email, name, clientURL);
      }
        catch (emailError) {    
        console.error("Error sending welcome email:", emailError);
      }
      
    }
  } catch (error) {
    console.error("Signup error:", error);

    return res.status(500).json({
      message: "Error in signup controller",
      error: error.message,
    });
  }
}

export { signupController };
