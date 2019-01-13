import React, { Component } from 'react';
import SanrioCard from "./components/CardTile";
import Wrapper from "./components/CardWrapper";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/NavBar";
import kawaii from "./kawaii.json";
import './App.css';

class App extends Component {

  state = {
    kawaii
  }

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Wrapper>
          {this.state.kawaii.map(sanrio => (
            <SanrioCard
              key={sanrio.key}
              image={sanrio.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
