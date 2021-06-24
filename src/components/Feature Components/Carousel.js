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

    prevSlide = () => {
        this.setState({
            index: this.state.index === 0 ?
                this.props.data.length - 1 :
                this.state.index - 1
        })
    }

    nextSlide = () => {
        this.setState({
            index: (this.state.index + 1) %
                this.props.data.length
        })
    }

    render() {
        return(
            <div className={"slider"}>
                <FaArrowAltCircleLeft
                    className={"leftArrow"}
                    onClick={this.prevSlide}/>
                <FaArrowAltCircleRight
                    className={"rightArrow"}
                    onClick={this.nextSlide}/>
                {this.props.data.map(
                    (slide, index) => {
                        return (
                            <div
                                key={index}
                                className={
                                    this.state.index === index ?
                                        "slide-active" : "slide"}>
                                <img
                                    key={this.props.data.image}
                                    src={slide.image}
                                    alt={slide.image_alt}
                                    className={"image"}/>
                                <div className={"caption"}>
                                    {slide.caption}
                                </div>
                            </div>
                        )
                    }
                )}
            </div>
        )
    }
}

export default Carousel