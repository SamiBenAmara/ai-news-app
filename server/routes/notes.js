const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: res.message });
    }
});

// Signup function
router.post('/signup', async (req, res) => {
    
    const checkUserExists = await User.findOne({ email: req.body.email });

    if (checkUserExists) {
        return res.status(400).json({ message: "User already Exists" });
    }

    const user = new User({
        email: req.body.email,
        password: req.body.password,
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch(error) {
        res.sendStatus(400).json({ message: error.message });
    }
});

// Signin function
router.post('/signin', async (req, res) => {
    
    try {
        const findUser = await User.findOne({ email: req.body.email });
        if (findUser.password === req.body.password) {
            res.status(200).json({ message: "User exists" });
        } else {
            console.log("BAD PASSWORD");
            res.status(400).json({ message: "Bad password" });
        }
    } catch (error) {
        res.status(400).json({ message: "User does not exist" });
    }

});

router.post('/notes', async (req, res) => {

    const findUser = await User.findOne({ email: req.body.email });

    if (!findUser) {
        req.status(400).json({ message: "User does not exist" });
    }

    console.log(req.body);

    try {
        findUser.tests.push({
            flashcards: req.body.data.flashcards,
            multichoices: req.body.data.multichoices,
            topic: req.body.data.topic,
            truefalse: req.body.data.truefalse,
        });
        console.log(findUser);
        const updatedUser = await findUser.save();
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: "Error adding notes" });
    }
});

module.exports = router;