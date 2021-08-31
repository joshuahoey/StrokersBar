import {Component} from "react";
import { withRouter } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import "./events.css";

class Events extends Component{
    render() {
        return (
            <div className="events">
                <br/>
                <Row>
                    <Col>
                        <div className="tournament">
                            <h1>Strokers Weekly Tournament</h1>
                            <br/>
                            <h3>Bud Tour Amateur 9 Ball</h3>
                            <br/>
                            <h3>Organized by: Northeast Am Billiards Series</h3>
                            <br/>
                            <h5>Every Thursday @ 6PM</h5>
                            <br/>
                            <h5>Entry Fee: $10</h5>
                        </div>
                    </Col>
                    <Col>

                    </Col>
                    <Col>
                        <h1>Weekly Events</h1>
                        <br/>
                        <h3>Ladies Night</h3>
                        <br/>
                        <h3>Every Wednesday</h3>
                        <br/>
                        <h3>Half Off Drinks and Free Pool!</h3>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default withRouter(Events);