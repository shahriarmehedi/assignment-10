import React from 'react';
import { NavLink } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="bg-gray-900 text-white">
            <section className="container mx-auto text-left px-10 py-40">
                <div className="flex items-center justify-between flex-col lg:flex-row">
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold my-10 leading-normal"> Your Perfect Gym Partner
                        </h1>
                        <p className="">Make it work, make it right, make it fast.</p>
                        <button
                            className="px-8 py-3 mt-10 bg-green-400 custom-bg-font rounded hover:bg-white text-gray-800 transition duration-300 "><NavLink to="/services">START YOUR JOURNEY</NavLink></button>
                    </div>
                    <div>
                        <img className="py-10 lg:py-0" src="https://i.ibb.co/6mnnk3M/about-man.png" alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;