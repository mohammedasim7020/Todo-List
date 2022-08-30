import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.count;
  });
  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: "increment",
            payload: { count },
          });
        }}
      >increment</button >
      <button onClick={()=>{
        dispatch({
            type:'decrement',
            payload:{count}
        })
      }}>decrement</button>
      <p> count: {count}</p>
    </div>
  );
};

export default Counter;
