import React from 'react';
import "@/styles/globals.css";
import Header from "@/components/Header/header";
import Home from "@/components/Home/home";
import About from "@/components/About/about"

const page = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
    </div>
  )
}

export default page