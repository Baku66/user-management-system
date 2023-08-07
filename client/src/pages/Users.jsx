import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Users() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get("http://localhost:3000/users");
        setusers(res.data)
      } catch (err) {
        console.log(err);
      }
    }; 

    fetchAllUsers();
  }, []);


  const handleDelete = async(id) => {
    try {
      await axios.delete("http://localhost:3000/users/" + id)
      window.location.reload()
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>Users List</h1>
      <Link to="/add"><button id="btn" className="btn btn-primary">Add User</button></Link>
      <div className="container container-fluid">
      <table className="table table-striped">
        <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {users.map((user, i) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td><Link to={`/view/${user.id}`}><button class="btn btn-sm btn-dark">View</button></Link></td>
                <td><Link to={`/edit/${user.id}`}><button className="btn btn-sm btn-dark">Edit</button></Link></td>
                <td><button onClick={()=>handleDelete(user.id)} className="btn btn-sm btn-dark">Delete</button></td>
              </tr>
        ))}
        </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
