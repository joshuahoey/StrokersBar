import React, { Component } from 'react';
import "./app.css";
import {Container, Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Image} from "react-bootstrap";
import { useMediaQuery } from 'react-responsive';

class App extends Component {
    state = {}
    render() {
        return (
            <div className="homePage" id="homepage">
                <header className="header" id="header">

                </header>
                <Row>
                    <Col className="hours" id="hours">
                        <h2> Hours </h2>
                        <h3>1PM - 1AM Daily</h3>
                        <h3>$5 Per Person All Day</h3>
                    </Col>
                </Row>
                <Container>
                <div className="about row">
                    <div className="col">
                        <h1>About US</h1>
                        <h4>Strokers Bar and Billiards is a family-owned friendly neighborhood pool hall and bar, located at 116 Bridge Street in Pelham.</h4>
                        <h4>Our goal is to create a fun and casual atmosphere where anyone can feel welcomed and relaxed.</h4>
                        <h4>If you want to sharpen your pool game or play a few rounds with friends, you can do so on tournament size tables ranging from six feet to nine feet all covered with Samonis cloth.</h4>
                        <h4>We enjoy creating a fun and competitive environment for players of all skill levels.</h4>
                        <h4>Not in the mood for a game, then come in for a beer and watch a ball game on one of the 5 tv’s or gather with your friends at the bar for a variety of liquor and beers.</h4>
                        <h4>Be sure to try out our bartender’s creative specialty cocktails that change with each season.</h4>
                        <h4>Just get in here and have some fun!!</h4>
                        <h4>Featuring twelve tables including</h4>
                        <h4>Seven 9' Tables </h4>
                        <h4>Three 7' Tables </h4>
                        <h4>Two 6' Tables</h4>
                        <h4>All with Simonis cloth and well maintained by local great Joe Morasse.</h4>
                        <h4>Popular with local pros and amateurs, we strive to provide a high quality and fun entertainment!</h4>
                    </div>
                    <div className="col">
                        <div className="pic" id="pic" ></div>
                    </div>
                    <div className="col">
                        <h1>--Draft List--</h1>
                        <h4>Fiddlehead </h4>
                        <h4>Woodchuck Amber </h4>
                        <h4>Great North IPA </h4>
                        <h4>Pabst Blue Ribbon </h4>
                        <h4>Blue Moon </h4>
                    </div>
                </div>
                </Container>
                <h5>Located</h5>
                <h6>116 Bridge St.</h6>
                <h6>Pelham, NH 03076</h6>
                <h5>Phone</h5>
                <h6>(603) 508-6491</h6>
            </div>
        );
    }
}
export default App;