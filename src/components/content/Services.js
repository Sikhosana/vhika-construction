import React, {Component} from 'react'
import Carousel from "../Feature Components/Carousel";
import {CarouselData} from "./CarouselData";

class Services extends Component {
    render() {
        return (
            <>
                <div>
                    <h1>Services</h1> <br/>
                </div>

                <div>
                    <Carousel data = {CarouselData} />
                </div>
            </>

        )
    }
}

export default Services;