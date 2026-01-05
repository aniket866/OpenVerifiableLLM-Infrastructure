import aj from "../lib/arcjet.js";
import { isSpoofedBot } from "@arcjet/inspect";


export const arcjetProtection = async (req, res, next) => {
  try {
    const decision = await aj.protect(req, {
      requested: req.path,
    });

    if (decision.isDenied()) {
      const reason = decision.reason?.type;

      if (reason === "RATE_LIMIT") {
        return res
          .status(429)
          .json({ message: "Rate limit exceeded. Please try again later." });
      }

      if (reason === "BOT") {
        return res
          .status(403)
          .json({ message: "Bot activity detected." });
      }

      if (reason === "CHALLENGE") {
        return res
          .status(403)
          .json({ message: "Challenge required." });
      }

      // Covers SHIELD / BLOCK / unknown
      return res.status(403).json({ message: "Access denied." });
    }

    // Optional spoofed bot check
    if (decision.results?.some(isSpoofedBot)) {
      return res.status(403).json({
        message: "Malicious bot activity detected.",
      });
    }

    next();
  } catch (error) {
    console.error("Arcjet Protection Error:", error);
    next(); // fail-open (recommended)
  }
};
