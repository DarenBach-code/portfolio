import React from 'react';
import "@/styles/globals.css";
import Header from "@/components/Header/header";
import Home from "@/components/Home/home";
import About from "@/components/About/about";
import Techstack from "@/components/Techstack/techstack";

const page = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <div id='about'><About/></div>
      <div id='techstack'><Techstack/></div>
    </div>
  )
}

export default page