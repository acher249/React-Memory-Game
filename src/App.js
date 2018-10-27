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
    // how to make this array global? put it as a variable in the state
    // console.log("clicked");

    // this.state.clickedFriendsArray.filter(el => 
    // copy - "spread operator"
    let arr = [...this.state.clickedFriendsArray];

    if(this.state.clickedFriendsArray.length == 0){
      arr.push(id);
      this.setState({ clickedFriendsArray: arr });
      // console.log(this.state.clickedFriendsArray);
    }
    else
    {
      // if the id is not in the array = -1
      if(arr.indexOf(id) === -1){
        console.log("id not in array..need to push into array.");
        arr.push(id);
        this.setState({ clickedFriendsArray: arr });
      }else{
        console.log("id already exists in array.. YOU LOSE");

      }
    }


    // Set this.state.friends equal to the new friends array
    // this.setState(
    //   { friends, 
    //   clickedFriendsArray: this.state.clickedFriendsArray 
    // });
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
