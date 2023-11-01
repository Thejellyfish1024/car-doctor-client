import { useContext, useEffect } from "react";
import SingleOrder from "./SingleOrder";
import axios from "axios";
import { AuthContext } from "../../provider/AuthProvider";

const MyOrders = () => {


    const { user, setOrders, orders } = useContext(AuthContext)
    const url = `http://localhost:5000/myOrders?clientEmail=${user?.email}`

    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setOrders(data)
    //         })
    // }, [url])

    useEffect(()=>{
        axios.get(url,{
            withCredentials:true
        })
        .then(res=>{
            setOrders(res.data)
        })
    },[setOrders,url])

 

    return (
        <div className="mb-20 mt-12">
            <h2 className="text-3xl text-center font-bold my-10">
                Total Orders : {orders.length}
            </h2>
           {
            orders?.map(order => <SingleOrder key={order._id} order={order}></SingleOrder>)
           }
        </div>
    );
};

export default MyOrders;