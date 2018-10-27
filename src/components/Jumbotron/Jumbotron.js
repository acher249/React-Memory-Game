import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
  <div className="jumbotron text-center">
    <h1>Score: {props.score}</h1>
    <h6>Click on the characters but don't forget who you have clicked on! Try to get them all!</h6>
  </div>
);

export default Jumbotron;
