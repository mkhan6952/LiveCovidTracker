import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./covid.css";

const Covid = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    fetch("https://corona.lmao.ninja/v2/countries/Pakistan")
      .then((res) => res.json())
      .then((data) => setCases(data))
      .catch((error) => console.log(error));
  });

  return (
    <div className="container">
      <h1 className="text-center mt-5">
        Live <div className="blink"></div> Covid Tracker
      </h1>
      <Card cases={cases} />
    </div>
  );
};

export default Covid;
