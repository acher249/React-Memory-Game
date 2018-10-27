import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Title from "./components/Title";
import friends from "./friends.json";
import { Container, Row, Col } from "./components/Grid";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clickedFriendsArray: [],
  };

  //passing in the id of the clicked element
  NewFriendClick = id => {

    // add friend id into array, check to make sure the clicked friend is not already in the array.
    // how to make this array global?
    console.log("we clicked a thing and are in the function now");

    if(this.state.clickedFriendsArray.length == 0){
      this.state.clickedFriendsArray.push(id);
    }
    else
    {
      // need to make sure that we only push it once and then stop the for loop
      let pushed = false;

      for (let i = 0; i < this.state.clickedFriendsArray.length && !pushed; i++) {
        // console.log(this.state.clickedFriendsArray[i], id);

        if (this.state.clickedFriendsArray[i] != id){
  
          console.log("we are in the if", id);
  
          this.state.clickedFriendsArray.push(id);
          pushed = true;
        }
        else
        {
          console.log("you lose");
          // you lose
        }
  
      }
    }


    // Set this.state.friends equal to the new friends array
    this.setState(
      { friends, 
      clickedFriendsArray: this.state.clickedFriendsArray 
    });
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    console.log(this.state);
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="lg-2"></Col>
            <Col size="xs-2">
            <Wrapper>
              {this.state.friends.map(friend => (
                <FriendCard
                // need to send the NewFriendClick function down to the component as a prop
                  NewFriendClick={this.NewFriendClick}
                  removeFriend={this.removeFriend}
                  id={friend.id}
                  key={friend.id}
                  name={friend.name}
                  image={friend.image}
                  occupation={friend.occupation}
                  location={friend.location}
                />
              ))}
            </Wrapper>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
