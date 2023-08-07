import React, { useState } from "react";
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";

function Edit() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const [error, setError] = useState(false)

    const location = useLocation();
    const navigate = useNavigate();

    const userId = location.pathname.split("/")[2];

    const handleChange = (e) => {
        setUser((prev) => ({...prev, [e.target.name] : e.target.value}))
    }

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`http//localhost:3000/users/${userId}`, user);
            navigate("/");
        } catch (err) {
            console.log(err);
            setError(true);
        }
    }

    return (
        <div>
            <h1>Edit User Details</h1>
            <div className="row w-50 mx-auto">
                <label>Name:</label>
                <input type="text" placeholder="Name" name="name" onChange={handleChange}></input>
                <label>Email:</label>
                <input type="text" placeholder="Email" name="email" onChange={handleChange}></input>
                <label>Phone:</label>
                <input type="text" placeholder="Phone" name="phone" onChange={handleChange}></input>
                <button onClick={handleClick} className="btn btn-sm btn-dark mt-4" >Update</button>
                {error && "Something went Wrong!"}
            </div>
        </div>
    )
}

export default Edit;