/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const DetailService = () => {

    let { id } = useParams();

    const [servicesDetails, setServicesDetails] = useState([]);

    const [singleService, setSingleService] = useState({});

    //  LOADING DATA
    useEffect(() => {
        fetch("/services2.json")
            .then((res) => res.json())
            .then((data) => setServicesDetails(data.services));
    }, []);

    // FINDING MATCHING DATA
    useEffect(() => {
        const foundService = servicesDetails.find(
            (services) => services.id === id
        );
        console.log(foundService);
        setSingleService(foundService);
    }, [servicesDetails]);




    return (
        <motion.div
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }} className="bg-gray-800">
            <h2 className=" py-10 text-center text-3xl font-bold text-green-400">{singleService?.name}</h2>
            <img className="mx-auto rounded-box" src={singleService?.picture} alt="" />
            <h2 className="text-gray-400 pt-5 w-2/5 mx-auto pb-20">About This Service: {singleService?.description} </h2>
            <NavLink to="/contact" activeStyle={{ fontWeight: "bold", color: "#34D399" }}><button className="px-8 py-3 mb-10 bg-green-400 custom-bg-font rounded hover:bg-white text-gray-800 transition duration-300 ">Request This Service</button></NavLink>
        </motion.div>
    );
};

export default DetailService;


