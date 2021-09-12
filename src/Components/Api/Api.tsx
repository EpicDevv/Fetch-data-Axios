import React from "react";
import axios from "axios";

const { useState, useEffect } = React;



const fetchRandomData = () => {
  return axios
    .get("https://randomuser.me/api")
    .then(({ data }) => {
      // handle success
    //   console.log(data);
      return JSON.stringify(data, null, 2);
    })
    .catch((err) => {
      // handle error
      console.error(err);
    });
};



export default function Api() {
  const [randomUser, setRandomUser] = useState("");

  useEffect(() => {
    fetchRandomData().then((randomData) => {
      setRandomUser(randomData || "no user data found");
    });
  }, []);

  return (
    <div>
      <pre>{randomUser}</pre>
    </div>
  );
}
