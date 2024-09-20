'use client';

import React, { useState } from "react";
import PetDetail from "./PetDetail";
import { CoolMode } from "@/components/ui/CoolMode";
import { Typewriter } from "react-simple-typewriter";
import { Card } from "@/components/Card"; // Import the new Card component

const Home = () => {
  const [selectedPet, setSelectedPet] = useState(null);
  const [hovered, setHovered] = useState(null); // State for hovered card

  const pets = [
    { id: 1, name: "Buddy", image: "/images/about-1.jpg" },
    { id: 2, name: "Whiskers", image: "/images/gallery-1.jpg" },
    { id: 3, name: "Mittens", image: "/images/gallery-3.jpg" },
    { id: 4, name: "Max", image: "/images/gallery-5.jpg" },
    { id: 5, name: "Charlie", image: "/images/gallery-6.jpg" },
    { id: 6, name: "Bella", image: "/images/gallery-7.jpg" },
    { id: 7, name: "Lucy", image: "/images/image_3.jpg" },
    { id: 8, name: "Milo", image: "/images/image_5.jpg" },
  ];

  const handleCardClick = (pet) => {
    setSelectedPet(pet);
  };

  const handleCloseDetail = () => {
    setSelectedPet(null);
  };

  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/bg_1.jpg")' }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center text-white p-10">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
              <Typewriter
                words={["Find Your Perfect Pet"]}
                loop={10}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
            <p className="mb-8 leading-relaxed">
              Discover a wide range of pets looking for loving homes. Whether you're
              looking for a playful puppy, a cuddly kitten, or a unique exotic pet,
              our platform connects you with wonderful animals that are waiting to
              become part of your family. Browse our listings and find your new best
              friend today!
            </p>
            <div className="flex justify-center">
              <CoolMode options={{ particle: "/images/paw.png" }}>
                <button className="inline-flex text-white bg-[#2563EB] border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 transition duration-300 ease-in-out rounded text-lg">
                  Adopt Now
                </button>
              </CoolMode>
              <button
                onClick={scrollToFooter}
                className="ml-4 inline-flex text-[#2563EB] bg-white border border-[#2563EB] py-2 px-6 focus:outline-none hover:bg-[#2563EB] hover:text-white transition duration-300 ease-in-out rounded text-lg shadow-lg"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {pets.map((pet, index) => (
              <div
                key={pet.id}
                className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer"
                onClick={() => handleCardClick(pet)}
              >
                <Card
                  card={pet}
                  index={index}
                  hovered={hovered}
                  setHovered={setHovered}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedPet && (
        <PetDetail pet={selectedPet} onClose={handleCloseDetail} />
      )}

      {/* Footer Section */}
      <footer id="footer" className="bg-gray-800 text-white py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold">Join our community!</h2>
          <p className="mt-4">Follow us on social media for updates and more!</p>
          {/* Add social media icons or links here */}
        </div>
      </footer>
    </div>
  );
};

export default Home;