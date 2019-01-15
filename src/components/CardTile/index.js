import React, { Component } from 'react';
import "./style.css";
import kawaii from "../../kawaii.json";


export default class SanrioCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      unclicked: true
    }

    this.shuffle = () => { 
      console.log("kawaii length: ", kawaii.length)
let i = kawaii.length - 1;
while (i > 0){
  const j = Math.floor(Math.random() * (i + 1));
  const temp = kawaii[i];
  kawaii[i]=kawaii[j];
  kawaii[j]=temp;
  i--;
}
    return kawaii;
  };

    this.handleClickEvent = (e) => {
      var score = 0;
      // var topScore = 0;
      console.log(score)
      this.state.unclicked === true ? score++ : console.log("already been clicked")
      console.log(score)
      console.log("clicked!");
      this.shuffle();
      this.setState({ unclicked: false })
    }

  }
  render() {
  
  return (
    
    <div className="card">
      <div onClick={this.handleClickEvent} className="img-container">
        <img alt="sanrio" src={this.props.image} id="img-tile" />
      </div>
    </div>
)
}
}



    // return (
    //     <div className="card">
    //     <div className="img-container">
    //     <img alt="sanrio" src={props.image} id="img-tile" />
    //     </div>
    //     </div>
    // );



