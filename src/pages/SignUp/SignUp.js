import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import useAuth from '../../hooks/useAuth';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const { signInUsingGoogle } = useAuth();
    const handleSignup = e => {
        const auth = getAuth();
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password has to be at least 6 characters long')
            return
        }

        const setUserName = () => {
            updateProfile(auth.currentUser, { displayName: name }).then(result => {

            })
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setError('')
                setUserName();
                console.log(user);
            }).catch(error => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
        setError('')
        setSuccess('User Successfully Registered !!!')

    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleNameChange = e => {
        setName(e.target.value);
    }


    return (
        <motion.div className="bg-gray-900 text-white pb-32"
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}>
            <h2 className="text-3xl py-10 font-bold">Please Signup</h2>
            <div className="w-5/6 md:w-1/2 lg:w-1/3 mx-auto py-16 bg-gray-800 rounded-box">
                <form onSubmit={handleSignup}>
                    <div className="form-control w-5/6 md:w-2/3 mx-auto ">
                        <label className="label">
                            <span className="label-text text-white">Your Name</span>
                        </label>
                        <input onBlur={handleNameChange} required type="text" placeholder="Type your Name" className="input text-gray-900 text-lg" />
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input onBlur={handleEmailChange} required type="email" placeholder="Type your email" className="input text-gray-900 text-lg" />
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input onBlur={handlePasswordChange} required type="password" placeholder="Type your password" className="input text-gray-900 text-lg" />
                        <br /><br />
                        <input type="submit" value="SIGNUP NOW" className=" btn bg-green-500 hover:bg-green-700 text-white" />
                        <br />
                        <div className="text-red-500 pb-5">
                            {error}
                        </div>
                        <div className="text-green-400 text-xl font-bold pb-5">
                            {success}
                        </div>
                        <h2>Have an Account? <NavLink to="/login" className="text-green-300">Click to Login</NavLink></h2>
                        <br />
                        <button onClick={signInUsingGoogle} className=" btn bg-gray-50 hover:bg-gray-200 text-gray-500 border-none">
                            <i className="fab fa-google text-xl text-green-400 pr-2"></i>Signup With Google</button>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default SignUp;