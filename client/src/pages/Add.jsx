import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Add() {

    const navigate = useNavigate();
    const [error,setError] = useState(false)

    const [user,setUser] = useState({
        name: "",
        phone: "",
        email: "",
    });

    const handleChange = (e) => {
        setUser((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    console.log(user)

    const handleClick = async (e) => {
        e.preventDefault() //To not let it refresh page, once it's been clicked.
        try {
            await axios.post("http://localhost:3000/users", user)
            navigate("/");
        } catch(err) {
            console.log(err)
            setError(true)
        }
    }


    return (
        <div>
            <h1>Add New User</h1>
            <div className="container">
            <div className="row w-50 mx-auto">
                <label>Name:</label>
                <input type="text" placeholder="Name" name="name" onChange={handleChange}></input>
                <label>Email:</label>
                <input type="text" placeholder="Email" name="email" onChange={handleChange}></input>
                <label>Phone:</label>
                <input type="text" placeholder="Phone" name="phone" onChange={handleChange}></input>
                <button onClick={handleClick} className="btn btn-sm btn-dark mt-4">Add Details</button>
                {error && "Something went wrong!"}
            </div>
            </div>

            
        </div>
    )
}

export default Add