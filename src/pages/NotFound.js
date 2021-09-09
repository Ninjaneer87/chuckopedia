import React from "react";
import { useHistory } from "react-router";

const NotFound = () => {
  const history = useHistory();
  const backHandler = () => {
    history.replace('/')
  }
  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'column',
        minHeight: " calc(100vh - 50px - 1rem)",
      }}
    >
      <h1
        style={{
          color: "var(--text-color)",
          textAlign: "center",
        }}
      >
        Wrong turn!
      </h1>
      <button
      onClick={backHandler}
      >Back to safety&nbsp;<i className="fas fa-long-arrow-alt-right"></i></button>
    </section>
  );
};

export default NotFound;
