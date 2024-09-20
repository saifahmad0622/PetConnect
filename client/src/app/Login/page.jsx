'use client';
import React from 'react';
import classes from './login.module.css';
import { useFormik } from 'formik';

const Login = () => {

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      console.log(values);

    }
  });

  return (
    <div>
      <h1 className='text-3xl text-center mt-10'>Login Page</h1>

      <div className='max-w-md shadow border rounded-lg py-10 px-6 mx-auto'>
        <form onSubmit={loginForm.handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            id='email'
            onChange={loginForm.handleChange}
            value={loginForm.values.email}
            type="text" className='w-full mb-6 px-3 py-1 rounded border' />
          <label htmlFor="email">Password</label>
          <input
            id='password'
            onChange={loginForm.handleChange}
            value={loginForm.values.password}
            type="password" className='w-full mb-6 px-3 py-1 rounded border' />

          <button type='submit' className='px-2 py-3 bg-blue-500 mt-6 rounded text-white w-full'>Submit</button>
        </form>
      </div>

    </div>
  )
}

export default Login;