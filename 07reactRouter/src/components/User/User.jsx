import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return <div className=" bg-slate-400 text-center">User: {userid} </div>;
}

export default User;
