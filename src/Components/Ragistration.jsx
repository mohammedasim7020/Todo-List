import React, { useState,createContext } from "react";
import TextField from "@mui/material/TextField";

import Cards from "./Cards";

export const contaxt = createContext();

const Ragistration = () => {
  const [data, setData] = useState({
    fName: "",
    mName: "",
    lName: "",
    age: "",
    email: "",
    number: "",
    address: "",
    company: "",
    ind: "",
  });
  const [error, setError] = useState({
    fName: false,
    mName: false,
    lName: false,
    age: false,
    email: false,
    number: false,
    address: false,
    company: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    setError({
      fName: false,
      mName: false,
      lName: false,
      age: false,
      email: false,
      number: false,
      address: false,
      company: false,
    });
  };

  return (
    <contaxt.Provider value={{value:[data,setData,error,setError]}}>
    <div>
      <div className="first_cont">
        <div className="main_container">
          <div className="input_filed">
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              type="text"
              value={data.fName}
              name="fName"
              onChange={(e) => handleChange(e)}
            />
            {error.fName ? (
              <div style={{ color: "red" }}>Please enter valid First Name</div>
            ) : null}
            <TextField
              id="outlined-basic"
              label="Middle Name"
              variant="outlined"
              type="text"
              value={data.mName}
              name="mName"
              onChange={(e) => handleChange(e)}
            />
            {error.mName ? (
              <div style={{ color: "red" }}>Please enter valid Middle Name</div>
            ) : null}
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              type="text"
              value={data.lName}
              name="lName"
              onChange={(e) => handleChange(e)}
            />
            {error.lName ? (
              <div style={{ color: "red" }}>Please enter valid Last Name</div>
            ) : null}
            <TextField
              id="outlined-basic"
              label="Age "
              variant="outlined"
              type="text"
              value={data.age}
              name="age"
              onChange={(e) => handleChange(e)}
            />
            {error.age ? (
              <div style={{ color: "red" }}>Please enter Your Age</div>
            ) : null}
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              value={data.email}
              name="email"
              onChange={(e) => handleChange(e)}
            />
            {error.email ? (
              <div style={{ color: "red" }}>Please enter valid Email</div>
            ) : null}
            <TextField
              id="outlined-basic"
              label="Number"
              variant="outlined"
              type="text"
              value={data.number}
              name="number"
              onChange={(e) => handleChange(e)}
            />
            {error.number ? (
              <div style={{ color: "red" }}>Please enter valid Number</div>
            ) : null}
            <TextField
              id="outlined-basic"
              label="Address"
              variant="outlined"
              type="text"
              value={data.address}
              name="address"
              onChange={(e) => handleChange(e)}
            />
            {error.address ? (
              <div style={{ color: "red" }}>Please enter Your Addres</div>
            ) : null}
            <TextField
              id="outlined-basic"
              label="Company"
              variant="outlined"
              type="text"
              value={data.company}
              name="company"
              onChange={(e) => handleChange(e)}
            />
            {error.company ? (
              <div style={{ color: "red" }}>
                Please enter valid Company Name
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <Cards  />
    </div>
    </contaxt.Provider>
  );
};

export default Ragistration;
