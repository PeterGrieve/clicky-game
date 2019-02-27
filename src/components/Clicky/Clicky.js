import React from "react";
import "./Clicky.css";
import { Col, Button } from 'react-materialize'

// The Clicky component is what users interact with to play the game
class Clicky extends React.Component {

    render() {

        return (
            <Col s={2}>
                <Button className="clicky white" onClick={this.props.onClick}>
                    {this.props.value}
                </Button>
            </Col>
        );
    }
}

export default Clicky;