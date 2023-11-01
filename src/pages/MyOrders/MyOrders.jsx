import {  useEffect } from "react";
import SingleOrder from "./SingleOrder";
// import axios from "axios";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyOrders = () => {

    const axiosSecure = useAxiosSecure()


    // const { user, setOrders, orders } = useContext(AuthContext)
    const { user, setOrders, orders } = useAuth()

    const url = `/myOrders?clientEmail=${user?.email}`

    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setOrders(data)
    //         })
    // }, [url])

    useEffect(()=>{
        axiosSecure.get(url)
        .then(res=>{
            setOrders(res.data)
        })
    },[setOrders,axiosSecure,url])

 

    return (
        <div className="mb-20 mt-12">
            <h2 className="text-3xl text-center font-bold my-10">
                Total Orders : {orders?.length}
            </h2>
           {
            orders?.map(order => <SingleOrder key={order._id} order={order}></SingleOrder>)
           }
        </div>
    );
};

export default MyOrders;