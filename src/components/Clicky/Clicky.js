import React from "react";
import "./Clicky.css";
import { Col, Button } from 'react-materialize'

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