import React from "react";
import Categories from "../components/sections/home/Categories";
import WelcomeText from "../components/sections/home/WelcomeText";

const Home = () => {
  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        minHeight: " calc(100vh - 50px - 1rem)",
      }}
    >
      <WelcomeText />
      <Categories />
    </section>
  );
};

export default Home;
