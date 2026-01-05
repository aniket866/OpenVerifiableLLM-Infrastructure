import jwt from 'jsonwebtoken';

export const generateToken = (userId, res) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        // Token valid forever
  });
    res.cookie('jwt', token, {
    httpOnly: true,    //prevent client-side JS from reading the cookie xss attacks:XSS (Cross-Site Scripting) is an attack where malicious JavaScript is injected into a website and executed in other users’ browsers to steal data or hijack sessions.
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 120 * 24 * 60 * 60 * 1000, // 120 days
  });
}