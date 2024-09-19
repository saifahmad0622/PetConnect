const express = require('express');
const PetModel = require('../models/PetModel');

const router = express.Router();

// Route to add a new pet
router.post('/add', (req, res) => {
    const newPet = new PetModel(req.body);
    newPet.save()
        .then((result) => {
            res.status(201).json(result); // Use 201 for resource creation
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Error creating pet', error: err });
        });
});

// Route to get all pets
router.get('/getall', (req, res) => {
    PetModel.find()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Error fetching pets', error: err });
        });
});

// Route to get a pet by ID
router.get('/getbyid/:id', (req, res) => {
    PetModel.findById(req.params.id)
        .then((result) => {
            if (!result) {
                return res.status(404).json({ message: 'Pet not found' });
            }
            res.status(200).json(result);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Error fetching pet by ID', error: err });
        });
});

// Route to delete a pet by ID
router.delete('/delete/:id', (req, res) => {
    PetModel.findByIdAndDelete(req.params.id)
        .then((result) => {
            if (!result) {
                return res.status(404).json({ message: 'Pet not found' });
            }
            res.status(200).json({ message: 'Pet deleted successfully', result });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Error deleting pet', error: err });
        });
});

// Route to update a pet by ID
router.put('/update/:id', (req, res) => {
    PetModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((result) => {
            if (!result) {
                return res.status(404).json({ message: 'Pet not found' });
            }
            res.status(200).json(result);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Error updating pet', error: err });
        });
});

// Export the router
module.exports = router;