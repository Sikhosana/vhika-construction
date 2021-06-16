import React, { Component } from 'react';
import "./Carousel.css"
import {faAngleRight} from "@fortawesome/free-solid-svg-icons"
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Carousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: "100%",
            height: "400px",
            item: 0,
            items: [
                {
                image_alt: "",
                image_uri: "#",
                    html_content: <><b>THE CONTENT</b></>
                }
            ],
        }
    }



    render() {
        return (
            <div  style={ { width : this.state.width , height : this.state.height } }   className={"major_div"}>
                <div className={"main_div"}>
                    <div className={"image_div"}>
                        <img
                            src={this.state.items[this.state.item].image_uri}
                            alt={this.state.items[this.state.item].image_alt}
                        />
                    </div>
                    <div className={"carousel_content_div"}>
                        {this.state.items[this.state.item].html_content}
                    </div>
                    <div className={"left_button_div"}>
                        <button><FontAwesomeIcon icon={faAngleLeft}/></button>
                    </div>
                    <div className={"right_button_div"}>
                        <button><FontAwesomeIcon icon={faAngleRight}/></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carousel