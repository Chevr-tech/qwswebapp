import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Download from "../components/Download";
import User from "../components/User";
import Market from "../components/Market";

function Home(props) {
  return (
    <>
      <Hero />
      <Services />
      <Download />
      <User />
      <Market />
    </>
  );
}

export default Home;
