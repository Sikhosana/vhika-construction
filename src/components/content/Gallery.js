import React, {Component} from 'react'
import "../../styles/gallery.css"
import image from "../../resources/images/gallery_background.jpg"

class Gallery extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (

            <div>
                <img id={"myImage"} srcSet={image} />
                <div id={"txt"}>
                    <h1>coming soon</h1>
                </div>
            </div>

        )
    }
}

export default Gallery;