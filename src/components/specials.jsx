import {Component} from "react";
import { withRouter } from "react-router-dom";
import "./specials.css";
import {Image} from "react-bootstrap";

class Specials extends Component{
    render() {
        return (
            <Image className="specials" src="/summerspecials.jpg"/>
        )
    }
}
export default withRouter(Specials);