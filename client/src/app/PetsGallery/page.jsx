'use client';

import React from 'react';

function PetsGallery() {
  const images = [
    '/images/cat_maine_coon_fluffy_151686_1920x1080.jpg',
    '/images/cats_animals_pets_210680_1920x1080.jpg',
    '/images/desc160-1024x640.jpg',
    '/images/dogs_protruding_tongues_pets_214976_1920x1080.jpg',
    '/images/German_Shepherd.jpg',
    '/images/Grey-Persian-Cat.jpg',
    '/images/OIP (1).jpeg',
    '/images/OIP (2).jpeg',
    '/images/retriever_dog_pet_172954_1920x1080.jpg',
    '/images/toy_spaniel_dog_pet_203892_1920x1080.jpg',
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#2563EB]">Pets Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-md shadow-md transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={src}
              alt={`Pet ${index + 1}`}
              className="w-full h-full object-cover transition duration-500 ease-in-out transform hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PetsGallery;
