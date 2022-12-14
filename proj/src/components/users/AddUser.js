import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

// import { useHistory } from "react-router-dom";

const AddUser = () => {
//   let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",  
    phone: "",
    website: ""
  });
  const navigate = useNavigate();

  const { name, username, email, phone, website } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const submit = async (e) => {
    e.preventDefault();
    console.log("12345");
    await axios.post("http://localhost:3003/users", user);
    navigate("/Register");
    // history.push("/");
  };
  return (
    <div className="container animate__animated animate__fadeInDown">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={(e)=>submit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg m-4"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}  
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg m-4"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg m-4"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg m-4"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg m-4"
              placeholder="Enter Your Website Name"
              name="website"
              value={website}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-outline-dark text-dark intro-siri"  type="submit">Add User
          </button>         
        </form>
      </div>
    </div>
  );
};

export default AddUser;