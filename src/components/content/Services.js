import React, {Component} from 'react'
import Carousel from "../Feature Components/Carousel";
import {ServicesData} from "./ServicesData";
import {FcServices} from 'react-icons/fc'

class Services extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <>
                <div>
                    <h1><FcServices /> Services <FcServices /></h1> <br/>
                </div>

                <div>
                    <Carousel data = {ServicesData} />
                </div>
            </>

        )
    }
}

export default Services;