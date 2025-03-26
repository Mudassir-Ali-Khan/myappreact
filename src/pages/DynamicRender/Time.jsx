import React, { useState } from "react";

const Time = () => {
  // const mytime = setInterval(()=> { (new Date().toISOString());}, 1000);
  // console.log(mytime)
  // const handleTime = () => {

  // }

  const [myTime, setMyTime] = useState(new Date());

  setInterval(function () {
    setMyTime(new Date());
  }, 1000); // 1000 ms = 1 second

  console.log(myTime.getHours(), myTime.getMinutes(), myTime.getSeconds());

  return (
    <>
      <div
        style={{
          backgroundColor: "#363636",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <div style={{ display: "flex", gap: "185px", fontSize: "20px", color: "#FCE014" }}>
          <h3>HOURS</h3>
          <h3>MINUTES</h3>
          <h3>SECONDS</h3>
        </div>
        <div style={{ display: "flex", gap: "100px", fontSize: "35px", color: "#FCE014", fontFamily: "arial" }}>
          <h1>{myTime.getHours()}</h1>
          <h1>:</h1>
          <h1>{myTime.getMinutes()}</h1>
          <h1>:</h1>
          <h1>{myTime.getSeconds()}</h1>
        </div>
      </div>
    </>
  );
};

export default Time;
