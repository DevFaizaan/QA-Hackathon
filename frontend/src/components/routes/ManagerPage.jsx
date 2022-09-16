import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

function ManagerPage() {
    const [drivers, setDrivers] = useState([]);
    const [orders, setOrders] = useState([]);

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
            <h1>manager page</h1>        
        </>
    );
}

export default ManagerPage;