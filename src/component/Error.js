import React from "react";

const Error = () => {
  return (
    <div
      className="showcase"
      style={{
        height: "650px",
        display: "flex",
        alignItems: "center",
        color: "#fff",
        fontSize: "30px",
        textAlign: "center",
      }}
    >
      <div className="overlay">
        <h1>Looks Like This Page Doesn't Exist</h1>
      </div>
    </div>
  );
};

export default Error;
