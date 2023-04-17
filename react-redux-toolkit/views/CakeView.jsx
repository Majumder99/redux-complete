import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { orderCake, restockCaked } from "../src/features/cake/cakeSlice";

const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Total cake : {numOfCakes}</h1>
      <button onClick={() => dispatch(orderCake(1))}>Buy cake</button>
      <button onClick={() => dispatch(restockCaked(10))}>Restock cake</button>
    </>
  );
};

export default CakeView;
