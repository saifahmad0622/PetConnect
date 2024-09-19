const express = require('express');
const Model = require('../models/UserModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const router = express.Router();

// Route to add a new user
router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save()
        .then((result) => {
            res.status(201).json(result); // Use 201 for resource creation
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Error creating user', error: err });
        });
});

// Route to get all users
router.get('/getall', (req, res) => {
    Model.find()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Error fetching users', error: err });
        });
});

// Route to get a user by city
router.get('/getbycity/:city', (req, res) => {
    Model.find({ city: req.params.city })
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Error fetching users by city', error: err });
        });
});

// Route to get a user by email
router.get('/getbyemail/:email', (req, res) => {
    Model.findOne({ email: req.params.email })
        .then((result) => {
            if (!result) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(result);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Error fetching user by email', error: err });
        });
});

// Route to get a user by ID
router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
        .then((result) => {
            if (!result) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(result);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Error fetching user by ID', error: err });
        });
});

// Route to delete a user by ID
router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            if (!result) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({ message: 'User deleted successfully', result });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Error deleting user', error: err });
        });
});

// Route to update a user by ID
router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((result) => {
            if (!result) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(result);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Error updating user', error: err });
        });
});

// Route to authenticate a user
router.post('/authenticate', (req, res) => {
    Model.findOne(req.body)
        .then((result) => {
            if (result) {
                const { _id, email } = result;
                const payload = { _id, email };

                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    { expiresIn: '1hr' },
                    (err, token) => {
                        if (err) {
                            console.error(err);
                            return res.status(500).json({ message: 'Error generating token', error: err });
                        }
                        res.status(200).json({ token });
                    }
                );
            } else {
                res.status(401).json({ message: 'Invalid Credentials' });
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Error during authentication', error: err });
        });
});

module.exports = router;