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
                            <label for={"firstName"} >First Name:</label>
                        </div>
                        <div className={"input_item"}>
                            <input type={"text"} name={"firstName"} id={"firstName"}/>
                        </div>
                    </div>

                    <div className={"input_container"}>
                        <div className={"label"}>
                            <label htmlFor={"lastName"}>Last Name:</label>
                        </div>
                        <div className={"input_item"}>
                            <input type={"text"} name={"lastName"} id={"lastName"}/>
                        </div>
                    </div>

                    <div className={"input_container"}>
                        <div className={"label"}>
                            <label htmlFor={"phone"}>Phone Number:</label>
                        </div>
                        <div className={"input_item"}>
                            <input type={"tel"} name={"phone"} id={"phone"}/>
                        </div>
                    </div>

                    <div className={"input_container"}>
                        <div className={"label"}>
                            <label htmlFor={"email"}>Email Address:</label>
                        </div>
                        <div className={"input_item"}>
                            <input type={"email"} name={"email"} id={"email"}/>
                        </div>
                    </div>

                    <div className={"input_container"}>
                        <div className={"label"}>
                            <label htmlFor={"message"}>Message:</label>
                        </div>
                        <div className={"input_item"}>
                            <textarea rows={5} name={"message"} id={"message"}/>
                        </div>
                    </div>
                    <div className={"btn"}>
                        <button type={"submit"}>Submit</button>
                    </div>


                </div>
            </>

        )
    }
}

export default Contact;