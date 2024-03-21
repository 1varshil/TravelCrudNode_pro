// controllers/userController.js

const User = require('../models/userModel');

exports.addUser = async (req, res) => {
    try {
        const TravelData = new User({
            source: req.body.source,
            destination: req.body.destination,
            duration: req.body.duration,
            dtype: req.body.dtype,
            tmode: req.body.tmode,
            fdestination: req.body.fdestination,
            hotel: req.body.hotel,
        });
        const register = await TravelData.save();
        res.status(201).json(register);
    } catch (e) {
        res.status(400).send(e);
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const data = await User.find();
        res.send(data);
    } catch (e) {
        res.status(500).send(e);
    }
};

exports.getUserById = async (req, res) => {
    try {
        const _id = req.params.id;
        const getUser = await User.findById(_id);
        res.send(getUser);
    } catch (e) {
        res.status(400).send(e);
    }
};

exports.updateUser = async (req, res) => {
    try {
        const _id = req.params.id;
        const getUser = await User.findByIdAndUpdate(_id, req.body, {
            new: true,
        });
        res.send(getUser);
    } catch (e) {
        res.status(500).send(e);
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const _id = req.params.id;
        const getUser = await User.findByIdAndDelete(_id);
        res.send(getUser);
    } catch (e) {
        res.status(500).send(e);
    }
};
