import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {


    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])


    return (
        <div className="bg-gray-900 text-white">
            <h1 className=" pt-10 text-center text-3xl font-bold text-green-400">Our Dedicated Services</h1>
            <p className="text-gray-400 pt-5">Our main services includes these trainings</p>
            <div className="w-5/6 xl:px-36 2xl:px-48 py-5 lg:py-28 text-white grid grid-cols-1 lg:grid-cols-3 gap-10 mx-auto">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;