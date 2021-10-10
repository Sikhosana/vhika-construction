import React, {Component} from 'react'
import background_image from "../../resources/images/home_background.jpg"
import {Link} from "react-router-dom";
import "../../styles/home.css"

class Home extends Component {

    componentDidMount() {
        window.scroll(0, 0)
    }

    render() {
        return (
            <div className={"all_home"}>
                <img id={"hm_img"} srcSet={background_image}/>
                <div className={"homeContent"}>
                    <div className={"head"}>
                        <h1>Welcome to Vhika Construction</h1>
                    </div>
                    <div className={"motto"}>
                        <h1>Lets go green now!</h1>
                    </div>
                    <div className={"h_container"}>
                        <div className={"h_items"}>
                            <h2>About us</h2>
                            <p>Welcome to the place where beauty and imagination abound.
                                We think that beautiful designs begin with a simple concept and a pen and paper</p>
                            <Link to="/about">
                                <button>read more</button>
                            </Link>
                        </div>
                        <div className={"h_items"}>
                            <h2>Our Mission</h2>
                            <ul>
                                <li>
                                    Our loyal business and residential clients are at the heart of our success
                                </li>
                                <li>
                                    To be a responsible, trustworthy, and dependable organization
                                    capable of creating long-term partnerships based on mutual respect
                                </li>
                            </ul>
                            <Link to="/about">
                                <button>read more</button>
                            </Link>
                        </div>
                        <div className={"h_items"}>
                            <h2>Our Strategy</h2>
                            <p>Our organization has a very efficient and competent workforce. Our clients'
                                pleasure is our principal focus. </p>
                            <Link to="/about">
                                <button>read more</button>
                            </Link>
                        </div>
                    </div>

                    <div className={"motto"}>
                        <Link to="/contact">
                            <button>Contact us today!</button>
                        </Link>
                    </div>
                </div>
            </div>

        )
    }
}

export default Home;