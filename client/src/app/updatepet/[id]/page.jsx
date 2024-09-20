'use client';
import axios from 'axios';
import { Formik } from 'formik';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const UpdatePet = () => {
    const { id } = useParams();
    const [petData, setPetData] = useState(null);
    const router = useRouter();

    const getPetData = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/pet/getbyid/${id}`);
            console.log(res.data);
            setPetData(res.data);
        } catch (error) {
            console.log('Error fetching pet data:', error);
        }
    };

    useEffect(() => {
        getPetData();
    }, []);

    const submitForm = async (values) => {
        try {
            await axios.put(`http://localhost:5000/pet/update/${id}`, values);
            toast.success('Pet Updated Successfully');
            router.back();
        } catch (err) {
            console.log('Error updating pet:', err);
            toast.error('Failed to Update Pet');
        }
    };

    return (
        <div className='max-w-[80%] mx-auto'>
            <h1 className='text-center font-bold mt-5 text-3xl'>Update Pet</h1>

            {petData ? (
                <Formik initialValues={petData} onSubmit={submitForm}>
                    {(updateForm) => (
                        <form onSubmit={updateForm.handleSubmit}>
                            <label htmlFor="name">Name</label>
                            <input
                                id='name'
                                onChange={updateForm.handleChange}
                                value={updateForm.values.name}
                                type="text"
                                className='mb-5 border-2 border-gray-500 rounded px-3 py-1 block w-full'
                            />

                            <label htmlFor="type">Type</label>
                            <input
                                id='type'
                                onChange={updateForm.handleChange}
                                value={updateForm.values.type}
                                type="text"
                                className='mb-5 border-2 border-gray-500 rounded px-3 py-1 block w-full'
                            />

                            <label htmlFor="breed">Breed</label>
                            <input
                                id='breed'
                                onChange={updateForm.handleChange}
                                value={updateForm.values.breed}
                                type="text"
                                className='mb-5 border-2 border-gray-500 rounded px-3 py-1 block w-full'
                            />

                            <label htmlFor="age">Age</label>
                            <input
                                id='age'
                                onChange={updateForm.handleChange}
                                value={updateForm.values.age}
                                type="number"
                                className='mb-5 border-2 border-gray-500 rounded px-3 py-1 block w-full'
                            />

                            <label htmlFor="description">Description</label>
                            <textarea
                                id='description'
                                onChange={updateForm.handleChange}
                                value={updateForm.values.description}
                                className='mb-5 border-2 border-gray-500 rounded px-3 py-1 block w-full'
                            />

                            <label htmlFor="image">Image URL</label>
                            <input
                                id='image'
                                onChange={updateForm.handleChange}
                                value={updateForm.values.image}
                                type="text"
                                className='mb-5 border-2 border-gray-500 rounded px-3 py-1 block w-full'
                            />

                            <label htmlFor="adoptionStatus">Adoption Status</label>
                            <select
                                id='adoptionStatus'
                                onChange={updateForm.handleChange}
                                value={updateForm.values.adoptionStatus}
                                className='mb-5 border-2 border-gray-500 rounded px-3 py-1 block w-full'
                            >
                                <option value="available">Available</option>
                                <option value="adopted">Adopted</option>
                            </select>

                            <button className='bg-blue-500 text-white px-4 py-2 rounded mt-5'>Submit</button>
                        </form>
                    )}
                </Formik>
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
};

export default UpdatePet;
