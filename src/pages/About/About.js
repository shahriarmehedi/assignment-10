/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { motion } from 'framer-motion';
// ///// MOTION.DIV FOR ANIMATION PURPOSE///////
const About = () => {
    return (
        <motion.div
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="custom-bg text-white">
            <h1 className="pt-10 text-center text-3xl font-bold text-green-400">ABOUT US</h1>
            <section className="text-gray-400 custom-bg body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <img alt="feature" className="object-cover object-center h-full w-full" src="https://i.ibb.co/xhP7hDp/about-img.png" />
                    </div>
                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-green-400 mb-5">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-white text-lg title-font font-medium mb-3">Our Mission</h2>
                                <p className="leading-relaxed text-base">Join the Mutants family and enjoy exclusive and state of the art training amenities along with exclusive membership privileges at the best gym in Patna. Train with our personal trainers and build your dream physique in less than a few months with a dedicated support staff and top notch fitness equipments. No other gym in Patna offers you in-house Crossfit Training, so come join us at Mutants gym for the aforementioned facilities and much more. At Mutants Gym, our vision is to help everyday people like you to step out of their comfort zone and push their limits towards a stronger and healthier lifestyle. Workout with state-of-the-art equipments and build your dream physique at the best gym in Dhaka, Bangladesh.</p>
                                <a className="mt-3 text-green-400 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-green-400 mb-5">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-white text-lg title-font font-medium mb-3">Our Vision</h2>
                                <p className="leading-relaxed text-base">Energize your mornings and come train and workout with our personal trainers at Mutants Gym. Join our Aerobics Yoga and Zumba lessons and have fun while exercising.</p>
                                <a className="mt-3 text-green-400 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default About;