import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

import Header from '../home/header/Header';

function ManagerPage() {
    const [drivers, setDrivers] = useState([]);
    const [orders, setOrders] = useState([]);

    const mappedDriver = () => {
     return ( drivers.map(driver =>  
            <li key={driver.firstName + driver._id + driver.lastName}>
                <h3>Driver name: {driver.firstName + " " + driver.lastName} </h3>
                <h3>Driver address: {driver.address}</h3>
                <br/>
                <br/>
            </li> )
            )
    }

    const mappedOrders = () => {
        return (orders.map(order =>  
               <li key={order._id}>
                   <h3>Order items: {order.items} </h3>
                   <h3>
                    Order address: 
                    {order.address1}
                    <br/>
                    {order.address2}
                    <br/>
                    {order.address3}
                    <br/>
                    {order.city}
                    </h3>
                   <br/>
                   <br/>
               </li> )
               )
    }
   
    const getDrivers = async() => {
        try {
            const res = await axios.get("http://localhost:5000/api/driver");
            setDrivers(res.data);
        } catch (err) {
            window.alert("There was an error getting drivers");
        }
    };

    const getOrders = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/order");
            setOrders(res.data);
        } catch (err) {
            window.alert("There was an error getting orders");
        };
    }

    useEffect(() => {
        getDrivers();
        getOrders();
    }, [])

    return(
        <>
            <Header />    
            <h1>Manager</h1> 
            {/* <button type="button" onClick={displayDrivers}> Get drivers</button> */}
            <ul>
                <h2>Drivers</h2>
                {mappedDriver()}
            </ul>
            <ul>
                <h2>Orders</h2>
                {mappedOrders()}
            </ul>
        </>
    );
}

export default ManagerPage;