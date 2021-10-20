import React from 'react';
import { NavLink } from 'react-router-dom';
import './Service.css'

const Service = (props) => {

    const { name, image, subtitle, id } = props.service

    return (
        <div className="transform custom-bg hover:-translate-y-3 to-hover hover:bg-gray-800 text-center secondary-bg transition duration-300 rounded w-full mx-auto">
            <img className="mx-auto w-full rounded-t" src={image} alt="" />
            <h1 className="px-5 pt-5 text-2xl font-bold text-green-400">{name}</h1>
            <h2 className="px-5 pt-5 text-gray-400">{subtitle}</h2>
            <NavLink
                to={`/services/${id}`}
            ><button className="px-8 py-3 mt-10 mb-8 bg-green-400 custom-bg-font rounded hover:bg-white text-gray-800 transition duration-300">VIEW DETAILS</button></NavLink>
        </div>
    );
};

export default Service;