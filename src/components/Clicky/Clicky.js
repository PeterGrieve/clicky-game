import React from "react";
import "./Clicky.css";
import { Col, Button } from 'react-materialize'



class Clicky extends React.Component {



    // clickyValues = images.map(this.populateValues, this);

    // populateValues(i) {

    //     return { value: <img src={require(i)} width="125" height="125" />, clicked: false };
    // }

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