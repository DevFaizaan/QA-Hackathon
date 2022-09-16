import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Header from "../home/header/Header";

import axios from 'axios';
import { useEffect, useState } from 'react';

function DriverPage() {
    const [id, setId] = useState("");
    const [driver, setDriver] = useState([]);

    const getData = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/driver/${id}`);
            setDriver(res.data);
        } catch (err) {
            window.alert("problemo");
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Header />
            <h1>Driver page</h1>

            <label for="driverId">Please enter your driver id</label>
            <br/>
            <input
                type="string"
                name="driverId"
                placeholder="Driver ID"
                value={id}
                onChange={(e) => {setId(e.target.value)}}
            />
            <button
                type="submit"
                onClick={getData}
            >
            Submit
            </button>

            <div className="driver-info">
                <div className="driver-info-container">
                    <h1>{driver._id}</h1>
                    <h1>{driver.firstName}</h1>
                    <h1>{driver.address}</h1>
                    <h1>{driver.email}</h1>
                </div>
            </div>
        </>

    );
}

export default DriverPage;
