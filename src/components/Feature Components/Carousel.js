import React, { Component } from 'react';
import "./Carousel.css"
import {faAngleRight} from "@fortawesome/free-solid-svg-icons"
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Carousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            intervalID: ""
        }
    }

    componentDidMount() {
        let intervalID = setInterval(() => {
            this.setState({index: (this.state.index + 1) % this.props.data.items.length})
            console.log(this.state.index)
        }, 5000)
        this.setState({ intervalID: intervalID})
    }

    render() {
        return (
            <div  style={ {
                width : this.props.data.width ,
                height : this.props.data.height,
                margin: "auto",
                marginTop: "20px"
            } }   className={"major_div"}>
                <div
                    className={"main_div"}
                    style={{
                        backgroundImage: 'url(' + this.props.data.items[this.state.index].image + ')',
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundColor: "rgba(0,0,0,0.5)"
                    }}>
                    <div className={"carousel_content_div"}>
                        {this.props.data.items[this.state.index].html_content}
                    </div>
                    <div className={"left_button_div"}>
                        <button onClick={
                            () => {
                                console.log(this.state.index)
                                this.setState(
                                {index: (this.state.index - 1 < 0) ?
                                        this.props.data.items.length - 1 :
                                        this.state.index - 1 % this.props.data.items.length}
                            )}}>
                            <FontAwesomeIcon icon={faAngleLeft} size={"2x"} />
                        </button>
                    </div>
                    <div className={"right_button_div"}>
                        <button onClick={
                            () => this.setState(
                                {index: (this.state.index + 1) % this.props.data.items.length}
                            )}><FontAwesomeIcon icon={faAngleRight} size={"2x"} /></button>
                    </div>
                </div>
            </div>
        )
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalID)
    }
}

export default Carousel