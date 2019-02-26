import React from "react";
import "./Header.css";
import Body from '../Body';
import { Col, Row, Navbar } from 'react-materialize'

class Header extends React.Component {

    render() {
        return (
            <div>
                <Navbar className="grey darken-4">
                    <Row>
                        <Col s={4}></Col>
                        <Col s={4}>
                            <h1 className="title">Clicky Game</h1>
                        </Col>
                    </Row>
                </Navbar>
            </div>
        );
    }
}

export default Header;