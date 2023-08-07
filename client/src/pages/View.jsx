import React, { useEffect, useState } from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";

function View() {
    const location = useLocation();
    const [user,setUser] = useState([]);
    const userId = location.pathname.split("/")[2];

    useEffect(() => {
        const fetchUser = async(id) => {
            try{
                const res = await axios.get(`http://localhost:3000/users/${userId}`)
                setUser(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchUser();
    })

    return (
        <div>
            <h1>View User</h1>
            {user.map((user,i) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.phone}</p>
                    <p>{user.email}</p>
                </div>
            ))}
        </div> 
    )
}

export default View;