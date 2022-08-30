import React, { useState,useContext, } from "react";
import { contaxt } from "./Ragistration";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Cards = (props) => {

  const {value} = useContext(contaxt);
  const [data,setData,error,setError]=value
  
  const [list, setList] = useState([]);
  const [isUpdate, setIsUpdate] = useState(true);

  const handleSubmit = () => {
    const regName = /^[A-Za-z\'`~!^&*()_=+":;?\s\.\,]+$/;
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!regName.test(data.fName)) {
      setError({ ...error, fName: true });
    } else if (!regName.test(data.mName)) {
      setError({ ...error, mName: true });
    } else if (!regName.test(data.lName)) {
      setError({ ...error, lName: true });
    } else if (data.age === "") {
      setError({ ...error, age: true });
    } else if (!regEmail.test(data.email)) {
      setError({ ...error, email: true });
    } else if (data.number === "") {
      setError({ ...error, number: true });
    } else if (data.address === "") {
      setError({ ...error, address: true });
    } else if (data.company === "") {
      setError({ ...error, company: true });
    } else {
      setList([...list, data]);

      setData({
        fName: "",
        mName: "",
        lName: "",
        age: "",
        email: "",
        number: "",
        address: "",
        company: "",
      });
    }
  };
  const handleDelete = (index) => {
    let array = [...list];
    array.splice(index, 1);
    setList(array);
  };

  const handleEdit = (item, index) => {
    setData({ ...item, ind: index });
    setIsUpdate(false);
  };
  //  console.log(data)

  const handleUpdate = () => {
    let array = [...list];
    array.splice(data.ind, 1, data);
    setList(array);
    setData({
      fName: "",
      mName: "",
      lName: "",
      age: "",
      email: "",
      number: "",
      address: "",
      company: "",
    });
    setIsUpdate(true);
  };

  return (
    <>
      {isUpdate ? (
        <Button variant="primary" onClick={() => handleSubmit()}>
          Add
        </Button>
      ) : (
        <Button onClick={() => handleUpdate()}>Update</Button>
      )}

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Number</th>
            <th>Address</th>
            <th>Company</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{item.fName}</td>
                  <td>{item.lName}</td>
                  <td>{item.mName}</td>
                  <td>{item.age}</td>
                  <td>{item.email}</td>
                  <td>{item.number}</td>
                  <td>{item.address}</td>
                  <td>{item.company}</td>
                  <td>
                    <Button onClick={() => handleEdit(item, index)}>
                      Edit
                    </Button>
                    <Button onClick={() => handleDelete(index)}>Delete</Button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Cards;
