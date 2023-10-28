import { Link, NavLink, useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { AiOutlineArrowRight } from 'react-icons/ai';


const ServiceDetails = () => {
    const { services } = useContext(AuthContext)
    const service = useLoaderData()
    const { title, price, img, description, facility, _id } = service
    // console.log(service);
    return (
        <div>
            <div className="w-full grid grid-cols-3 gap-7">
                <div className=" col-span-2">
                    <img src={img} className="w-full h-96 rounded-lg" alt="" />
                    <h2 className="text-4xl font-bold mt-10">{title}</h2>
                    <p className="mt-10">{description}</p>
                    <div className="grid grid-cols-2 gap-5 mt-10">
                        {
                            facility?.map(singleFacility =>
                                <div key={singleFacility.name} className="bg-base-300 p-10 border-t-[#FF3811] border-2 rounded-xl">
                                    <h4 className="text-xl font-bold">{singleFacility?.name}</h4>
                                    <p className="mt-4">{singleFacility?.details}</p>
                                </div>
                            )
                        }
                    </div>
                    <p className="mt-10">{description}</p>
                </div>
                <div>
                    <div className="bg-base-300 py-10 px-12 rounded-lg">
                        <h2 className="text-2xl font-bold">Services</h2>
                        <ul className="mt-5">
                            {
                                services.map(singleService => <NavLink key={singleService._id} to={`/services/${singleService._id}`} className={({ isActive }) => isActive ? ' mb-3 p-3 text-lg font-semibold  items-center flex justify-between  rounded-lg bg-[#FF3811] text-white'
                                    :
                                    'text-lg font-semibold mb-3 p-3 bg-[#FFF]  items-center flex justify-between rounded-lg'}>
                                    <a>{singleService.title}</a>
                                    <AiOutlineArrowRight></AiOutlineArrowRight>

                                </NavLink>)
                            }
                        </ul>
                    </div>
                    <h3 className="text-4xl font-bold mt-10">Price ${price}</h3>
                    <Link to={`/services/checkOut/${_id}`}>
                    <button className="btn w-full  mt-8 hover:bg-orange-400 bg-[#FF3811] text-white">Proceed Checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;