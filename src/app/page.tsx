import React from 'react';
import "@/styles/globals.css";
import Header from "@/components/Header/header";
import Home from "@/components/Home/home";
import About from "@/components/About/about";
import Techstack from "@/components/Techstack/techstack";
import Qualifications from '@/components/Qualifications/qualifications';

const page = () => {
  return (
    <div>
      <Header/>
      <div id='home'><Home/></div>
      <div id='about'><About/></div>
      <div id='techstack'><Techstack/></div>
      <div id='qualifications'><Qualifications/></div>
    </div>
  )
}

export default page