import React, {Component} from 'react'
import Carousel from "../Feature Components/Carousel";
import {CarouselData} from "../content/CarouselData"
import "../../App.css"

class Home extends Component {


    render() {
        return (
            <>
                <div className={"homeContent"}>
                    <h1>WELCOME TO OUR HOME PAGE</h1>
                    <Carousel data = {CarouselData} />
                </div>
            </>

        )
    }
}

export default Home;