const { Schema, model } = require('../connection');

const petSchema = new Schema({
    name: { type: String, required: true }, // Name of the pet
    type: { type: String, required: true }, // Type of pet (e.g., Dog, Cat)
    breed: { type: String, required: true }, // Breed of the pet
    age: { type: Number, required: true }, // Age of the pet in years
    description: { type: String, required: true }, // Description of the pet
    image: { type: String, required: true }, // URL of the pet's image
    adoptionStatus: { type: String, enum: ['available', 'adopted'], default: 'available' }, // Adoption status
    createdAt: { type: Date, default: Date.now }, // Date the pet was added
});

// Export the Pet model
module.exports = model('pets', petSchema);