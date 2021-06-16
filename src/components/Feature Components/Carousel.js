import React, { Component } from 'react';
import "./Carousel.css"
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'

class Carousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            size: props.data.length
        }
    }

    render() {
        return(
            <div className={"slider"}>
                <FaArrowAltCircleLeft className={"leftArrow"} onClick={"prevSlide"} />
                <FaArrowAltCircleRight className={"rightArrow"} onClick={"nextSlide"} />
                {this.props.data.map(
                    (slide, index) => {
                        return (
                            <div>
                                <img src={slide.image} alt={slide.image_alt}/>
                                <h4>{slide.caption}</h4>
                            </div>
                        )
                    }
                )}
            </div>
        )
    }
}

export default Carousel