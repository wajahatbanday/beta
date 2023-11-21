import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/wajahatbanday")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setData(data);
  //       });
  //   }, []);
  console.log(data);
  return (
    <div className="text-center m-4 bg-gray-300 text-white p-4 text-3xl flex flex-row justify-start gap-5 ">
      <img src={data.avatar_url} width={200} height={200}></img>
      <div className="flex flex-col  text-left gap-3 text-black">
        <p>{data.name}</p>
        <p>Followers: {data.followers}</p>
        <p>Following: {data.following}</p>
        <p>{data.html_url}</p>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/wajahatbanday");
  return response.json();
};
