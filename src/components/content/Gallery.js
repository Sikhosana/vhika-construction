import React, {Component} from 'react'
import myVid from "../../resources/videos/myVid.mp4"
import "../../styles/gallery.css"

class Gallery extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (

            <div>
                <video autoPlay muted loop id="myVideo">
                    <source src={myVid} type={"video/mp4"}/>
                </video>
                <div id={"txt"}>
                    <h1>coming soon</h1>
                </div>
            </div>

        )
    }
}

export default Gallery;