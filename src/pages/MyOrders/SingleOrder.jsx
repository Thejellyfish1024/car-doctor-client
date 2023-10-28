/* eslint-disable react/prop-types */


const SingleOrder = ({ order }) => {
    const { servicePrice, clientName, clientEmail, serviceImg, date } = order
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <td className=" w-10">
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