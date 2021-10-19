import React from 'react';
import Hero from './Hero';
import Services from './Services';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
        >
            <Hero></Hero>
            <Services></Services>
        </motion.div>
    );
};

export default Home;