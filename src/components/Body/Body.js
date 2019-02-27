
import React from "react";
import "./Body.css";
import Clicky from '../Clicky';
import { Container, Row, Col } from 'react-materialize'

const keys = [0,1,2,3,4,5,6,7,8,9,10,11];

    // const images = ['./images/aquarius.png',
    //     './images/aries.png',
    //     './images/cancer.png',
    //     './images/capricorn.png',
    //     './images/gemini.png',
    //     './images/leo.png',
    //     './images/libra.png',
    //     './images/pisces.png',
    //     './images/sagittarius.png',
    //     './images/scorpio.png',
    //     './images/taurus.png',
    //     './images/virgo.png'];

class Body extends React.Component {
  

  state = {

    score: 0,

      // clickyValues: keys.map(this.mapImages, this)

    clickyValues: [
      { value: <img src={require('./images/aquarius.png')} width="125" height="125" />, clicked: false },
      { value: <img src={require('./images/aries.png')} width="125" height="125" />, clicked: false },
      { value: <img src={require('./images/cancer.png')} width="125" height="125" />, clicked: false },
      { value: <img src={require('./images/capricorn.png')} width="125" height="125" />, clicked: false },
      { value: <img src={require('./images/gemini.png')} width="125" height="125" />, clicked: false },
      { value: <img src={require('./images/leo.png')} width="125" height="125" />, clicked: false },
      { value: <img src={require('./images/libra.png')} width="125" height="125" />, clicked: false },
      { value: <img src={require('./images/pisces.png')} width="125" height="125" />, clicked: false },
      { value: <img src={require('./images/sagittarius.png')} width="125" height="125" />, clicked: false },
      { value: <img src={require('./images/scorpio.png')} width="125" height="125" />, clicked: false },
      { value: <img src={require('./images/taurus.png')} width="125" height="125" />, clicked: false },
      { value: <img src={require('./images/virgo.png')} width="125" height="125" />, clicked: false }]

  };

  // mapImages(i){

  //   return { value: <img src={require(images[i])} width="125" height="125" />, clicked: false};

  // }

  handleClick(i) {

    var values = this.state.clickyValues;
    var score = this.state.score;

    if (values[i].clicked === true) {

      alert("You Lose!");
      score = 0;

      for (var j = 0; j < values.length; j++) {
        values[j].clicked = false;
      }

      this.setState({
        values: values,
        score: score
      });

      return;

    }

    values[i].clicked = true;

    score++;

    if (score >= 12) {

      alert("You Win!");
      score = 0;

      for (var j = 0; j < values.length; j++) {
        values[j].clicked = false;
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

    const renderedClickies = keys.map(this.renderClicky, this);

    return (
      <div>
        <Container>
          <Row>
            <Col s={8}>

              <div className="directions">
                <p>
                  Click Every Image once to win.
                  If you click the same Image twice, you lose.
              </p>
              </div>
            </Col>
            <Col s={4}>
              <h1 className="scoreLabel">Score: {this.state.score}</h1>
            </Col>
          </Row>
          <Row>
            <Col s={2}></Col>
            {renderedClickies[0]}
            {renderedClickies[1]}
            {renderedClickies[2]}
            {renderedClickies[3]}
            <Col s={2}></Col>
          </Row>
          <Row>
            <Col s={2}></Col>
            {renderedClickies[4]}
            {renderedClickies[5]}
            {renderedClickies[6]}
            {renderedClickies[7]}
            <Col s={2}></Col>
          </Row>
          <Row>
            <Col s={2}></Col>
            {renderedClickies[8]}
            {renderedClickies[9]}
            {renderedClickies[10]}
            {renderedClickies[11]}
            <Col s={2}></Col>
          </Row>
        </Container>
      </div>
    );

  };
}


export default Body;


