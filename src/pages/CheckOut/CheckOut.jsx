import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";


const CheckOut = () => {
    
    const {user} = useContext(AuthContext)
    const service = useLoaderData()
    // console.log(service);

    const handleOrderConfirm = e =>{
        e.preventDefault();
        const form = e.target;
        const clientName = form.name.value;
        const clientEmail = form.email.value;
        const date = form.date.value;
        const servicePrice = service.price;
        const serviceName = service.title;

        const order = {
            clientName,
            clientEmail,
            date,
            serviceName,
            servicePrice,
            serviceImg : service.img
        }
        fetch('http://localhost:5000/myOrders', {
            method:"POST",
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            if(data?.acknowledged){
                Swal.fire({
                    title: 'Order is on progress',
                    icon: 'success',
                    confirmButtonText: 'Close'
                  })
            }
        })
    }
    
    return (
        <div>
            <h2 className="text-2xl font-bold my-8 text-center">Service : {service.title}</h2>
            <form onSubmit={handleOrderConfirm} className="bg-base-300 p-20 rounded-lg grid grid-cols-2 gap-5 mb-20">
                <input type="text" defaultValue={user?.displayName} className="bg-[#FFF] w-full py-4 px-7 rounded-lg" placeholder="Your Name" name="name" required />
                <input type="date" name="date" className="bg-[#FFF] w-full py-4 pl-7 rounded-lg" placeholder="Date" required />
                <input type="email" name="email" defaultValue={user?.email} className="bg-[#FFF] w-full py-4 pl-7 rounded-lg" placeholder="Your Email" required />
                <input type="text" name="number" className="bg-[#FFF] w-full py-4 pl-7 rounded-lg" placeholder="Your Number" required />
                <textarea name="textarea" placeholder="Your Message" className="col-span-2 p-6 rounded-lg" id="" cols="30" rows="10"></textarea>
                <button className="btn w-full col-span-2 bg-[#FF3811] text-white font-semibold text-lg hover:text-black">
                    <input type="submit" value="Order Confirm" />
                </button>
            </form>
        </div>
    );
};

export default CheckOut;