import React, { Component } from 'react';
import SanrioCard from "./components/CardTile";
import Wrapper from "./components/CardWrapper";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/NavBar";
import kawaii from "./kawaii.json";
import './App.css';


class App extends Component {

  shuffle() {
    var m = kawaii.length, t, i;
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = kawaii[m];
      kawaii[m] = kawaii[i];
      kawaii[i] = t;
    };
    return kawaii;
  };

  // this.kawaii.shuffle()

  handleClickEvent = () => {
    var score = 0;
    var topScore = 0;
    console.log(score)
    this.state.unclicked === true ? score++ : console.log("already been clicked")
    console.log(score)
    this.setState({ unclicked:false })
  }


  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Wrapper>
          {kawaii.map(sanrio => (
            < SanrioCard
              onClick={this.handleClickEvent}
              key={sanrio.key}
              image={sanrio.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  };
}


export default App;
