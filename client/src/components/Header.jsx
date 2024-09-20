import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="bg-[#2563EB] p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <Image
                        src="/images/paw.png"
                        alt="PetConnect Logo"
                        width={50}
                        height={50}
                        className="mr-2"
                    />
                    <h1 className="text-white text-3xl font-bold">
                        <Link href="/">PetConnect</Link>
                    </h1>
                </div>

                <div className="flex-grow mx-4">
                    <input
                        type="text"
                        placeholder="Search for pets..."
                        className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link href="/about" className="text-white hover:underline">About</Link>
                        </li>
                        <li>
                            <Link href="/Adopt" className="text-white hover:underline">Adopt</Link>
                        </li>
                        <li>
                            <Link href="/signup" className="text-white hover:underline">Signup</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;