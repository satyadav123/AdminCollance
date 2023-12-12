import './App.css'
import React, { useState } from "react";
import jsonData from "./data.json";

function App() {
  
 
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [userData, setUserData] = useState({});
    const [message, setMessage] = useState("");
  
    const handleLogin = () => {
      const users = jsonData;
  
      if (users.hasOwnProperty(role)) {
        const selectedRole = users[role];
  
        if (selectedRole.name.includes(name)) {
          setMessage("Login successful");
          setUserData(selectedRole);
        } else {
          setMessage("Login failed. Please check your credentials.");
          setUserData({});
        }
      } else {
        setMessage("Invalid role selected");
        setUserData({});
      }
    };
  
    return (
      <div className="container mt-5">
        <h1 className="mb-4">Role-based Access Control</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="mb-3">
              <label htmlFor="nameInput" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="roleSelect" className="form-label">
                Select Role:
              </label>
              <select
                className="form-select"
                id="roleSelect"
                onChange={(e) => setRole(e.target.value)}
                value={role}
              >
                <option value="">Select Role</option>
                <option value="superadmin">Super Admin</option>
                <option value="streamadmin">Stream Admin</option>
                <option value="manager">Manager</option>
                <option value="employee">Employee</option>
              </select>
            </div>
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
            <p className="mt-3">{message}</p>
          </div>
          {message === "Login successful" && (
            <div className="col-md-8">
              <div className="card mt-3">
                <div className="card-body">
                  <h5 className="card-title">Role Information</h5>
                  {/* <p>
                    <strong>Name List:</strong>{" "}
                    {userData.name && userData.name.join(", ")}
                  </p> */}
                  <p>
                    <strong>Data List:</strong>{" "}
                    {userData.data && userData.data.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  


export default App
