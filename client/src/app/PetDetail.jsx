import React from 'react';

const PetDetail = ({ pet, onClose }) => {
  const petDetails = {
    1: {
      name: 'Buddy',
      description: 'Friendly and energetic. Loves outdoor activities.',
      breed: 'Golden Retriever',
      age: '2 years',
      gender: 'Male',
      size: 'Large',
    },
    2: {
      name: 'Whiskers',
      description: 'Curious and playful. A perfect indoor companion.',
      breed: 'Siamese',
      age: '1 year',
      gender: 'Female',
      size: 'Medium',
    },
    3: {
      name: 'Mittens',
      description: 'Calm and affectionate. Enjoys cozy spaces.',
      breed: 'Maine Coon',
      age: '3 years',
      gender: 'Male',
      size: 'Large',
    },
    4: {
      name: 'Max',
      description: 'Loyal and protective. Great with kids.',
      breed: 'German Shepherd',
      age: '4 years',
      gender: 'Male',
      size: 'Large',
    },
    5: {
      name: 'Charlie',
      description: 'Playful and loving. Enjoys long walks.',
      breed: 'Beagle',
      age: '1.5 years',
      gender: 'Female',
      size: 'Medium',
    },
    6: {
      name: 'Bella',
      description: 'Gentle and kind. Loves being around people.',
      breed: 'Labrador',
      age: '2.5 years',
      gender: 'Female',
      size: 'Large',
    },
    7: {
      name: 'Lucy',
      description: 'Active and curious. Enjoys exploring new places.',
      breed: 'Bengal',
      age: '2 years',
      gender: 'Female',
      size: 'Medium',
    },
    8: {
      name: 'Milo',
      description: 'Smart and independent. A great adventurer.',
      breed: 'Persian',
      age: '3 years',
      gender: 'Male',
      size: 'Medium',
    },
  };

  const details = petDetails[pet.id];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg max-w-md mx-auto relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">{details.name}</h2>
        <img
          src={pet.image}
          alt={details.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <p className="text-gray-700 mb-2"><strong>Breed:</strong> {details.breed}</p>
        <p className="text-gray-700 mb-2"><strong>Age:</strong> {details.age}</p>
        <p className="text-gray-700 mb-2"><strong>Gender:</strong> {details.gender}</p>
        <p className="text-gray-700 mb-2"><strong>Size:</strong> {details.size}</p>
        <p className="text-gray-700 mb-4"><strong>Description:</strong> {details.description}</p>
        <button
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg w-full"
          onClick={onClose}
          style={{ backgroundColor: 'rgb(59 130 246)' }}
        >
          Adopt {details.name}
        </button>
      </div>
    </div>
  );
};

export default PetDetail;
