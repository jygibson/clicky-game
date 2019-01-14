import React from 'react';
import "./style.css";



const SanrioCard = props => {
    return (
        <div className="card">
        <div className="img-container">
        <img alt="sanrio" src={props.image} id="img-tile" />
        </div>
        </div>
    );
}

const createState = (Component, initialState) => class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        unclicked: initialState};
    }
    render() {
      return <Component {...this.props} state={this.state} setState={this.setState.bind(this)} />;
    }
  };

export default createState(SanrioCard, true);
