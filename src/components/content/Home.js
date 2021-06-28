import React, {Component} from 'react'
import background_image from "../../resources/images/home_background.jpg"
import "../../styles/home.css"

class Home extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <div className={"all_home"}>
                <img id={"hm_img"} srcSet={background_image}/>
                <div className={"homeContent"}>
                    <div className={"head"}>
                        <h1>Welcome to Vhika Construction</h1>
                    </div>
                    <div>
                        <div>
                            <h2>About us</h2>
                        </div>
                        <div>
                            <h2>Our Mission</h2>
                        </div>
                        <div>
                            <h2>Our Strategy</h2>
                        </div>
                    </div>
                    <div className={"motto"}>
                        <button>Lets go green now!</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default Home;