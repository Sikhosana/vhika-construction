import React, {Component} from 'react'
import "../../styles/contact.css"

class Contact extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <>
                <div>
                    <h1>Get in touch with us!</h1>
                </div>
                <div className={"contact_form"}>
                    <div className={"input_container"}>
                        <div className={"label"}>
                            <label for={"firstName"} >First Name</label>
                        </div>
                        <div className={"input_item"}>
                            <input type={"text"} name={"firstName"} id={"firstName"}/>
                        </div>
                    </div>

                </div>
            </>

        )
    }
}

export default Contact;