import React, {Component} from 'react'
import Carousel from "../Feature Components/Carousel";
import homeCarousel from "./homeCarousel";
class Home extends Component {


    render() {
        return (
            <>
                <div>
                    <h1>WELCOME TO OUR HOME PAGE</h1>
                    <Carousel data={homeCarousel} />
                </div>
            </>

        )
    }
}

export default Home;