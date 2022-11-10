import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

export const signIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if(!existingUser) return res.status(404).json({ message: "User doesn't exist."});

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid credential"});

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id}, 'test', { expiresIn: '1h'});

        res.status(200).json({ decoded: existingUser, token });
    } catch (error) {
        res.status(500).json({message: "Something went wrong." });
    }
}

export const signUp = async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if(existingUser) return res.status(400).json({ message: "User already exist with this email"});

        if(password !== confirmPassword ) return res.status(400).json({ message: "Password doesn't match."});

        const hashedPassword = await bcrypt.hash(password, 12);

        const decoded = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`});

        const token = jwt.sign({ email: decoded.email, id: decoded._id}, 'test', { expiresIn: '1h'});

        res.status(200).json({ decoded, token });
    } catch (error) {
        res.status(500).json({message: "Something went wrong." });
    }
}