
import React from "react";
import "./Body.css";
import Clicky from '../Clicky';

// import reliable references to images
import aquarius from './images/aquarius.png'
import aries from './images/aries.png'
import cancer from './images/cancer.png'
import capricorn from './images/capricorn.png'
import gemini from './images/gemini.png'
import leo from './images/leo.png'
import libra from './images/libra.png'
import pisces from './images/pisces.png'
import sagittarius from './images/sagittarius.png'
import scorpio from './images/scorpio.png'
import taurus from './images/taurus.png'
import virgo from './images/virgo.png'

// import the necessary materialize components
import { Container, Row, Col } from 'react-materialize'

// the keys array is used by our map functions to attribute values to our clicky tiles
const keys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// this array of image references is used to map images onto our clicky tiles
const images = [aquarius,
  aries,
  cancer,
  capricorn,
  gemini,
  leo,
  libra,
  pisces,
  sagittarius,
  scorpio,
  taurus,
  virgo];

// the Body component encompasses everything under the header...
// including any Clicky components
class Body extends React.Component {

  state = {

    score: 0,

    // associate images to the clicky tiles with a map function
    clickyValues: keys.map(this.mapImages, this)

  };

  // this function associates a unique image to each clicky tile
  mapImages(i) {

    return { value: <img src={images[i]} width="125" height="125" />, clicked: false };

  }

  // this function is called when a clicky tile is clicked
  handleClick(i) {

    // set the clicky tile values and score
    let values = this.state.clickyValues;
    let score = this.state.score;

    // if the clicky tile that was clicked has been clicked before...
    // its game over
    if (values[i].clicked === true) {

      alert("You Lose!");

      // after the losing the game, the score is reset...
      // as well as the "clicked" boolean on every tile
      score = 0;
      for (let j = 0; j < values.length; j++) {
        values[j].clicked = false;
      }

      // implement the reset values to the body's state
      this.setState({
        values: values,
        score: score
      });

      return;

    }

    // if the clicky tile that was clicked had not been...
    // clicked already, mark it as clicked, and up the score
    values[i].clicked = true;
    score++;

    // if the score is 12 or greater, that means...
    // every tile has been clicked once, and no tiles have been clicked twice.
    // this is the game's win condition
    if (score >= 12) {

      alert("You Win!");

      // after the winning the game, the score is reset...
      // as well as the "clicked" boolean on every tile
      score = 0;
      for (let j = 0; j < values.length; j++) {
        values[j].clicked = false;
      }

     // implement the reset values to the body's state
      this.setState({
        values: values,
        score: score
      });

      return;

    }

    // If the game has not been won or lost yet...
    //  we must shuffle the tiles after a tile has been clicked

    //  Create a handful of values for a shuffe procedure 
    let currentIndex = values.length, temporaryValue, randomIndex;

    //  While there remain elements to shuffle...
    while (0 !== currentIndex) {

      //  Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      //  And swap it with the current element.
      temporaryValue = values[currentIndex];
      values[currentIndex] = values[randomIndex];
      values[randomIndex] = temporaryValue;
    }

    //  implement the shuffled values to the body's state
    this.setState({
      values: values,
      score: score
    });


  }

  //  this function fetches the clicky component, renders it, and gives it values
  renderClicky(i) {

    return (
      <Clicky
        value={this.state.clickyValues[i].value}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {

    //  this map function quickly produces twelve clicky tiles.
    //  each clicky tile has a unique key from 0 to 11
    const renderedClickies = keys.map(this.renderClicky, this);

    //  finally we return the body's HTML which is styled with React - Materialze components
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


