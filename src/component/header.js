import React from "react";

export default function Header() {
 return <nav className="navbar">
  <img src={require('../images/trollface.png')} className="trollface" />
  <h3 className="title"> MeMeGenerator </h3>
  <div className="reactcourse">React Course - Project 3</div>
 </nav>
}