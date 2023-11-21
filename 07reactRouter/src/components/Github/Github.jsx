import React from "react";
import { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/wajahatbanday")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl flex flex-row justify-start gap-5">
      <img src={data.avatar_url} width={200} height={200}></img>
      <div className="flex justify-center items-center">
        <div>
          {data.name}
          <br />
          <br />
          Followers: {data.followers}
          <br />
          <br />
          Following: {data.following}
        </div>
      </div>
    </div>
  );
}

export default Github;
