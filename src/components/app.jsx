import React, { Component } from 'react';
import "./app.css";
import {Container, Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Image} from "react-bootstrap";
import NavbarHome from "./navbar";
import Homepage from "./homepage";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Specials from "./specials";
import Events from "./events";

class App extends Component {
    state = {}
    render() {
        return (
                <div className="Strokers">
                    <Switch>
                        <React.Fragment>
                            <div className="navbar">
                                <NavbarHome />
                            </div>
                            <Route path='/' exact render={Homepage}/>
                            <Route path='/home' render={Homepage}/>
                            <Route path='/events' render={Events}/>
                            <Route path='/specials' render={Specials}/>
                        </React.Fragment>
                    </Switch>
                </div>

        );
    }
}
export default App;