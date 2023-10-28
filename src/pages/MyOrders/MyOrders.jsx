import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import SingleOrder from "./SingleOrder";


const MyOrders = () => {

    const [orders, setOrders] = useState([])

    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/myOrders?clientEmail=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrders(data)
            })
    }, [url])

    return (
        <div className="mb-20 mt-12">
           {
            orders?.map(order => <SingleOrder key={order._id} order={order}></SingleOrder>)
           }
        </div>
    );
};

export default MyOrders;