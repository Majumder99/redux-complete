import React, { useEffect } from "react";
import { fetchUsers } from "../src/features/users/userSlice";
import { useSelector, useDispatch } from "react-redux";

const UserView = () => {
  const user = useSelector((state) => state.user);
  //   console.log({ loading, error, user });
  const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(fetchUsers());
  //   }, []);
  console.log(user);
  return (
    <>
      <h1>Total users</h1>
      <button onClick={() => dispatch(fetchUsers())}>Fetch</button>
      {user.loading && <h2>Loading .... </h2>}
      {!user.loading && user.error && <h2>{user.error}</h2>}
      {!user.loading &&
        user.data.length > 0 &&
        user.data.map((m) => <div>{m.name}</div>)}
    </>
  );
};

export default UserView;
