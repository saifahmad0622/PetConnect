'use client'; // This marks the component as a Client Component

import React from 'react';
import Link from 'next/link';

const AboutPage = () => {
    return (
        <div 
            className="relative bg-cover bg-center h-screen" 
            style={{ backgroundImage: "url('/images/pngtree-pet-adoption-point-poster-background-picture-image_1005242.jpg')" }}
        >
            <div className="absolute inset-0 bg-gray-800 opacity-70"></div> {/* Dark overlay for readability */}
            <div className="container mx-auto p-8 relative z-10">
                <h1 className="text-4xl font-extrabold text-center mb-8 text-white">About PetConnect</h1>
                <p className="text-base text-gray-100 mb-6 leading-relaxed">
                    Welcome to PetConnect, a dedicated platform that aims to bridge the gap between loving pet owners and their perfect furry companions. Our mission is to reduce pet homelessness and ensure that every animal finds a caring family. We believe that every pet deserves a second chance at happiness.
                </p>

                <h2 className="text-3xl font-semibold mt-6 mb-4 text-blue-400">Our Story</h2>
                <p className="text-base text-gray-100 mb-6 leading-relaxed">
                    PetConnect was founded by a passionate group of animal lovers who saw firsthand the challenges faced by pets in shelters. With a vision to create a more efficient way to connect pets with potential adopters, we established this platform. Our journey began with a simple idea: to make pet adoption accessible and straightforward for everyone. Over the years, we have partnered with numerous shelters and rescue organizations to create a network that facilitates successful adoptions.
                </p>

                <h2 className="text-3xl font-semibold mt-6 mb-4 text-blue-400">Our Approach</h2>
                <p className="text-base text-gray-100 mb-6 leading-relaxed">
                    At PetConnect, we understand that adopting a pet is a significant decision. That's why we've designed our platform to be user-friendly and informative. Our advanced search features allow potential adopters to filter pets based on their preferences, including breed, size, age, and temperament. We also provide detailed profiles for each pet, including their medical history and personality traits, ensuring that adopters can make informed decisions.
                </p>

                <h2 className="text-3xl font-semibold mt-6 mb-4 text-blue-400">Our Impact</h2>
                <p className="text-base text-gray-100 mb-6 leading-relaxed">
                    Since our inception, PetConnect has successfully facilitated thousands of adoptions. We work closely with our network of trusted animal shelters and rescue organizations to ensure that all pets are healthy, vaccinated, and ready for their new homes. Our commitment to responsible adoption practices helps ensure that every pet finds not just any home, but the right home.
                </p>

                <h2 className="text-3xl font-semibold mt-6 mb-4 text-blue-400">Our Values</h2>
                <p className="text-base text-gray-100 mb-6 leading-relaxed">
                    At the core of PetConnect are our values: compassion, integrity, and innovation. We strive to treat all animals with respect and kindness while advocating for their welfare. Our team is dedicated to improving the adoption process through continuous innovation and community engagement.
                </p>

                <h2 className="text-3xl font-semibold mt-6 mb-4 text-blue-400">Join Our Community</h2>
                <p className="text-base text-gray-100 mb-6 leading-relaxed">
                    PetConnect is more than just a website; it’s a community of animal lovers who share a common goal: making the world a better place for pets. We invite you to join us in our mission by adopting a pet, volunteering at local shelters, or supporting our cause through donations. Together, we can create a future where every pet has a loving home.
                </p>

                <div className="flex justify-center mt-10">
                    <Link href="/PetsGallery" passHref>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                            View Pets Gallery
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;