/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {

    const { img, price, title, _id } = service;

    return (
        <div className="flex justify-center">
            <div className="card w-96 bg-base-100 shadow-xl px-6 py-8">
                <figure><img src={img} alt="Shoes" className="h-52 w-full" /></figure>
                <div className="mt-5">
                    <h2 className="card-title">{title}</h2>
                    <div className="flex justify-between items-center mt-3">
                        <p className="text-xl font-semibold text-[#FF3811]">Price : ${price}</p>
                        <Link to={`/services/${_id}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75" stroke="#FF3811" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;