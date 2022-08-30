import React, { useState } from "react";

const Info = () => {
  const [student, setStudent] = useState([
    {
      name: "Faraz",
      age: 20,
    },
    {
      name: "Adnan",
      age: 16,
    },
    {
      name: "Sohel",
      age: 28,
    },
    {
      name: "saif",
      age: 26,
    },
  ]);
  console.log(student);
  const handleIncrease = () => {
    const arr = [];
    student.forEach((item) => {
      console.log(item.age + 1)
      const obj = {
        ...item,
        age: item.age + 1,
      };
      arr.push(obj);
      let filter = arr.filter((item)=>item.age > 25);
      console.log(filter)
    });

  };

  return (
    <div>
      <button onClick={handleIncrease}>Increase Age</button>
    </div>
  );
};

export default Info;
