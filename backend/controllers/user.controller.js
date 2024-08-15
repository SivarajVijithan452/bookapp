// controllers/user.controller.js
import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body; // Match fields with schema

        // Validate input
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Hash the password
        const salt = await bcryptjs.genSalt(10); // Generate a salt with 10 rounds
        const hashedPassword = await bcryptjs.hash(password, salt); // Hash the password

        // Create new user with hashed password
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({
            message: 'User created successfully',
            user: {
                _id: newUser._id,
                username: newUser.username,
                email: newUser.email
            }
        });
        
    } catch (error) {
        console.error('Error signing up:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body; // Match fields with schema

        // Validate input
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Compare provided password with hashed password
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }else {

        // Successfully authenticated, you can generate a token or respond with success
        // For simplicity, we're just sending a success message
        res.status(200).json({ message: 'Login successful',
            _id:user._id,
            username: user.username,
            email: user.email
         });
        }

    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
