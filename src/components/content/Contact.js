import React, {Component} from 'react'
import "../../styles/contact.css"
import emailjs from 'emailjs-com'
import{ init} from 'emailjs-com';
init("user_peGW9RaIcqylhlY1oZXaN");

class Contact extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        }
    }

    clearForm() {
        this.setState(
            {
                firstName: '',
                lastName: '',
                email: '',
                message: ''
            }
        )
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit (e) {
        e.preventDefault()

        const templateId = 'template_fy9idqc';
        this.sendFeedback(templateId,
            {
                    message: this.state.message,
                    from_name: this.state.firstName + ' ' + this.state.lastName,
                    reply_to: this.state.email
            })

    }

    sendFeedback (templateId, variables) {
        emailjs.send(
            'service_cb8oxb2', templateId,
            variables
        ).then(res => {
            //show modal
            console.log('Email successfully sent!')
            this.clearForm();
        })
            .catch(err => {
                //show modal
                console.error('Error:', err)
            })
    }

    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <>
                <div>
                    <h1>Get in touch with us!</h1>
                </div>
                <form className={"contact_form"} onSubmit={this.handleSubmit}>
                    <div className={"input_container"}>
                        <div className={"label"}>
                            <label htmlFor={"firstName"} >First Name:</label>
                        </div>
                        <div className={"input_item"}>
                            <input
                                type={"text"}
                                name={"firstName"}
                                id={"firstName"}
                                required
                                value={this.state.firstName}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>

                    <div className={"input_container"}>
                        <div className={"label"}>
                            <label htmlFor={"lastName"}>Last Name:</label>
                        </div>
                        <div className={"input_item"}>
                            <input
                                type={"text"}
                                name={"lastName"} id={"lastName"}
                                onChange={this.handleChange}
                                value={this.state.lastName}/>
                        </div>
                    </div>

                    <div className={"input_container"}>
                        <div className={"label"}>
                            <label htmlFor={"email"}>Email Address:</label>
                        </div>
                        <div className={"input_item"}>
                            <input
                                type={"email"}
                                name={"email"}
                                id={"email"}
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>

                    <div className={"input_container"}>
                        <div className={"label"}>
                            <label htmlFor={"message"}>Message:</label>
                        </div>
                        <div className={"input_item"}>
                            <textarea
                                rows={5}
                                name={"message"}
                                id={"message"}
                                value={this.state.message}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className={"btn"}>
                        <button type={"submit"} onClick={this.handleSubmit}>Submit</button>
                    </div>
                </form>
            </>

        )
    }
}

export default Contact;