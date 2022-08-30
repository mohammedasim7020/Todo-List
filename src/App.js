import "./App.css";

import Info from "./Components/Info";
import Counter from "./Counter";
// import React, { useEffect, useState } from "react";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardContent from "@mui/material/CardContent";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// // import FavoriteIcon from "@mui/icons-material/Favorite";
// // import ShareIcon from "@mui/icons-material/Share";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import Ragistration from "./Components/Ragistration";

function App() {
  // const [data, setData] = useState([]);

  // const fetchData = () => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);
  // console.log(data);

  return (
    <div className="App">
      <Ragistration/>

      {/* <Info /> */}
      {/* <Counter/> */}

      {/* {data.map((products) => {
        return (
          <div className="main_container" key={products.id}>
            <Card className="card_container" sx={{ maxWidth: 345 }}>
              <CardHeader
                // action={
                //   <IconButton aria-label="settings">
                //     <MoreVertIcon />
                //   </IconButton>
                // }
                title={products.title}
              />

              <img src={products.image} alt="" width="150px" height="200px" />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  <p>{products.description}</p>
                  <h3>{`Price ${products.price}`}</h3>
                </Typography>
              </CardContent>
            </Card>
          </div>
        );
      })} */}
    </div>
  );
}

export default App;
