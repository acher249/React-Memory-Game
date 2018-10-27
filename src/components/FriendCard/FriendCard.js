import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card" onClick={() => props.NewFriendClick(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
      </ul>
    </div>
    {/* 

    TO DO:
    - steal this onclick method below.. but put the onlick over the entire card.
    - need the new logic for the memory game. figure out the best place to put it.
    - get an array of all the friends, out of the json file.
    - when the game starts create a new array with the friends that you have clicked with a counter for how many
    you have gotten in a row. then if the user clicks the same character that they have aleady clicked, 
    ie. is inside the array, then they lose. give them a prompt top start over.
    
    */}

    {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
      𝘅
    </span> */}
  </div>
);

export default FriendCard;
