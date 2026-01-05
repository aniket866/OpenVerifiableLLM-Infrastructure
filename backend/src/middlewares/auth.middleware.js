import jwt from 'jsonwebtoken';
import User from '../models/user';
import { ENV } from '../lib/env';

export const protect = async (req, res, next) => {
  const token = req.cookies.jwt;
    if (!token) {
    return res.status(401).json({ message: 'Not authorized, token missing' });
    }
    try {
    const decoded = jwt.verify(token, ENV.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: 'Not authorized, user not found' });
    }
    req.user=user;
    next();
  }
    catch (error) {
    console.error('Token verification failed:', error);
    return res.status(401).json({ message: 'Not authorized, token failed' });
  }
};