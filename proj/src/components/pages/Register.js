import React,{useState,useEffect} from "react";
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai" 
import axios from "axios";
import { Link } from "react-router-dom";
const Register =()=>{
    const [users, setUser] = useState([])
    useEffect(() => {
      loadUsers();
    }, []);
    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setUser(result.data.reverse());
      };
    
      const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
      };
    return(
        <div className="container text-center animate__animated animate__fadeInDown">
            <div className="py-4">
                <h1>Register Page</h1>
                <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone No</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <Link class="btn btn-primary mx-2" to={`/users/${user.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-primary mx-2"
                    to={`/users/edit/${user.id}`}
                  >
                    <AiOutlineEdit size={20}/>
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    <AiOutlineDelete size={20}/>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
            </div>
        </div>
    );
};
export default Register;