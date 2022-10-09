import React from "react";
import "./App.css"
import {data} from "./helper/data.js"

import Card from "./components/cards/Cards";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

function App() {
  // console.log(data)
  return (
    <div className="container">
      <Navbar/>
      <Header/>
      <div className="cards" onClick={showPar}>
        {data.map((item)=> {
          return <Card key={item.id} title={item.title} desc={item.desc} img={item.image}/>;
        } )}
        
      </div>
    </div>
  );
}

export default App;

function showPar(e){
  // console.log(e.target.nextElementSibling);
  e.target.nextElementSibling.firstElementChild.classList.toggle("show");
}

