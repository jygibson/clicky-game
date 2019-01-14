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

  handleClickEvent = event => {
    event.preventDefault();
    var score = 0;
    var topScore = 0;
    this.state.clicked === false ? score++ : this.kawaii.shuffle();
    this.clicked();
    document.getElementById("#score").textContent(score);
  }

  clicked = id => {
    this.setState({
      [id]: this.key,
      clicked: true
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Wrapper>
          {kawaii.map(sanrio => (
            < SanrioCard SanrioTile={kawaii} onClick={this.handleClickEvent.bind}
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
