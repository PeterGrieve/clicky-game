
import React from "react";
import "./Body.css";
import { Navbar, Container, Row, Col, Button } from 'react-materialize'

function Clicky(props) {
  return (
    <Col s={2}>
      <Button className="clicky white" onClick={props.onClick}>
        {props.value}
      </Button>
    </Col>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      score: 0,

      clickyValues: [
        { value: <img src={require('./images/aquarius.png')} width="125" height="125"/>, clicked: false },
        { value: <img src={require('./images/aries.png')} width="125" height="125"/>, clicked: false },
        { value: <img src={require('./images/cancer.png')} width="125" height="125"/>, clicked: false },
        { value: <img src={require('./images/capricorn.png')} width="125" height="125"/>, clicked: false },
        { value: <img src={require('./images/gemini.png')} width="125" height="125"/>, clicked: false },
        { value: <img src={require('./images/leo.png')} width="125" height="125"/>, clicked: false },
        { value: <img src={require('./images/libra.png')} width="125" height="125"/>, clicked: false },
        { value: <img src={require('./images/pisces.png')} width="125" height="125"/>, clicked: false },
        { value: <img src={require('./images/sagittarius.png')} width="125" height="125"/>, clicked: false },
        { value: <img src={require('./images/scorpio.png')} width="125" height="125"/>, clicked: false },
        { value: <img src={require('./images/taurus.png')} width="125" height="125"/>, clicked: false },
        { value: <img src={require('./images/virgo.png')} width="125" height="125"/>, clicked: false },
      ]

    };
  }

  handleClick(i) {

    var values = this.state.clickyValues;
    var score = this.state.score;

    if (values[i].clicked === true) {

      alert("You Lose!"); 
      score = 0;
    
     for(var i=0; i<values.length;i++)
     {
        values[i].clicked = false;
     }

     this.setState({
      values: values,
      score: score
    });

      return;

    }

    values[i].clicked = true;

    score++;

    if(score >= 12){

      alert("You Win!"); 
      score = 0;
    
     for(var i=0; i<values.length;i++)
     {
        values[i].clicked = false;
     }

     this.setState({
      values: values,
      score: score
    });

     return;

    }

    var currentIndex = values.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = values[currentIndex];
      values[currentIndex] = values[randomIndex];
      values[randomIndex] = temporaryValue;
    }


    this.setState({
      values: values,
      score: score
    });


  }

  renderClicky(i) {
    return (
      <Clicky
        value={this.state.clickyValues[i].value}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <Navbar className="grey darken-4">
        <Row>
          <Col s={4}></Col>
          <Col s={4}>
            <h1 className="title">Clicky Game</h1>
          </Col>
          <Col s={4}>
            <h1 className="scoreLabel">Score: {this.state.score}</h1>
          </Col>
          </Row>
        </Navbar>
        <Container>
          <Row>
            <div className="directions">
              <p>
                Click Every Image once to win.
                If you click the same Image twice you lose.
              </p>
            </div>
          </Row>
          <Row>
            <Col s={2}></Col>
            {this.renderClicky(0)}
            {this.renderClicky(1)}
            {this.renderClicky(2)}
            {this.renderClicky(3)}
            <Col s={2}></Col>
          </Row>
          <Row>
            <Col s={2}></Col>
            {this.renderClicky(4)}
            {this.renderClicky(5)}
            {this.renderClicky(6)}
            {this.renderClicky(7)}
            <Col s={2}></Col>
          </Row>
          <Row>
            <Col s={2}></Col>
            {this.renderClicky(8)}
            {this.renderClicky(9)}
            {this.renderClicky(10)}
            {this.renderClicky(11)}
            <Col s={2}></Col>
          </Row>
        </Container>
      </div>
    );

  };
}

const Body = props => {

  return (
    <div className="game-board">
      <Board />
    </div>
  );

}

export default Body;


