/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

// import axios from "axios";


const SingleOrder = ({ order }) => {
    const { servicePrice, clientName, clientEmail,_id, serviceImg, date } = order
    const {orders, setOrders} = useContext(AuthContext)
    // console.log(_id);
   const handleDelete = (id) =>{
    // axios.delete(`http://localhost:5000/myOrders/${_id}`)
    // .then(res => console.log(res.data))
    fetch(`http://localhost:5000/myOrders/${id}`,{
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.deletedCount > 0){
            const remaining = orders.filter(order => order._id !== _id)
            setOrders(remaining)
            Swal.fire({
                title: 'Deleted Successfully',
                icon: 'success',
                confirmButtonText: 'Close'
              })
        }
    })
   }

    return (
        <div className="overflow-x-auto">
            <table className="table">
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <td onClick={()=>handleDelete(_id)} className=" w-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="20" fill="#444444" />
                                <path d="M25 15L20 20L25 15ZM20 20L15 25L20 20ZM20 20L25 25L20 20ZM20 20L15 15L20 20Z" fill="#444444" />
                                <path d="M20 20L15 15M25 15L20 20L25 15ZM20 20L15 25L20 20ZM20 20L25 25L20 20Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </td>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="rounded-lg w-24 h-24">
                                        <img src={serviceImg} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold text-lg">{clientName}</div>
                                    <div className="text-sm opacity-50">{clientEmail}</div>
                                </div>
                            </div>
                        </td>
                        <td className="font-semibold text-lg">
                            ${servicePrice}
                        </td>
                        <td className="font-semibold text-lg">{date}</td>
                        <th>
                            <button className="py-2 px-4 rounded-lg bg-[#FF3811] text-white ">Pending</button>
                        </th>
                    </tr>




                </tbody>


            </table>
        </div>
    );
};

export default SingleOrder;