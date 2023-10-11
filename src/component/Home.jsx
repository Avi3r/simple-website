import React from "react";
// import { NavLink } from "react-router-dom";
import web from "../component/images/p1.png";
import Common from "./Common";

const Home = () => {
  return (
    <>
    <Common name="welcome to home page" imgsrc={web} visit="/services" btname="get stated"/>
    </>
  );
};

export default Home;
