import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

var _ = require('lodash');

const Stars = (props) => {
  return (
    <div className="col-5">
      {_.range(props.numberOfStars).map(i =>
        <i key={i} className="fa fa-star"></i>
      )}
    </div>
  );
}

const Button = (props) => {
  return (
    <div>
      <button>=</button>
    </div>
  );
}

const Answer = (props) => {
  return (
    <div className="col-5">
      {props.selectedNumbers.map((number, i) =>
        <span key={i}>{number}</span>  
      )}
    </div>
  );
}

const Numbers = (props) => {
  const numberClassName = (number) => {
    if (props.selectedNumbers.indexOf(number) >= 0) {
      return 'selected';
    }
  }

  return (
    <div className="card text-center">
      <div>
        {Numbers.list.map((number, i) =>
          <span key={i} className={numberClassName(number)}
            onClick={() => props.selectedNumber(number)}>
          </span>
        )}
      </div>
    </div>
  );
};

Numbers.list = _.range(1, 10);

class Game extends React.Component {
  state = {
    selectedNumbers: [],
    randomNumberOfStars: 1 + Math.floor(Math.random()*9),
  };
  selectedNumber = (clickedNumber => {
    if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) { return; }
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }));
  });

  render() {
    return (
      <div className="container">
          <h3>Play Nine</h3>
          <hr />
          <div className="row">
            <Stars numberOfStars={this.state.randomNumberOfStars} />
            <Button />
            <Answer selectedNumbers={this.state.selectedNumbers} />
            </div>
            <br />
            <Numbers selectedNumbers={this.state.selectedNumbers}
              selectedNumber={this.selectedNumber} />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <Game />
      </div>
    );
  }
}

export default App;
