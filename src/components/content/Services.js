import React, {Component} from 'react'
import Carousel from "../Feature Components/Carousel";
import {ServicesData} from "./ServicesData";

class Services extends Component {
    render() {
        return (
            <>
                <div>
                    <h1>Services</h1> <br/>
                </div>

                <div>
                    <Carousel data = {ServicesData} />
                </div>
            </>

        )
    }
}

export default Services;