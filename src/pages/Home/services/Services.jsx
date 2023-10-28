/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import ServiceCard from "./ServiceCard";
import { AuthContext } from "../../../provider/AuthProvider";


const Services = () => {

    const {services} = useContext(AuthContext)
    return (
        <div className="mt-16 pb-16">
            <h4 className="text-xl font-bold text-center text-[#FF3811]">Service</h4>
            <h2 className="text-center font-bold text-4xl mt-6">Our Service Area</h2>
            <p className="text-center text-[#737373] mt-6">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
                {
                    services.map(service => <ServiceCard key={service._id} service={service} ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;