import React, {Component} from 'react'
import "../../styles/contact.css"
import emailjs from 'emailjs-com'
import{ init} from 'emailjs-com';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
init("user_dMsMnWxfIS7V7oaI8RAXn");


let items = ['lnameError', 'fnameError', 'emlError', 'msgError']




class Contact extends Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.showErrors = this.showErrors.bind(this)
        this.hideErrors = this.hideErrors.bind(this)
        this.successMessage = this.successMessage.bind(this)
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
    successMessage = () => {
        confirmAlert({
            title: 'Message sent!',
            message: 'We will get in touch with you shortly :)',
            buttons: [
                {
                    label: 'Done',
                }
            ]
        });
    };
    showErrors(issues) {
        issues.forEach((issue) => document.getElementById(issue).style.display='block')
    }

    hideErrors(items) {
        items.forEach((item) => document.getElementById(item).style.display='none')
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit (e) {
        e.preventDefault()

        let errors = false
        let issues = []
        let fname = this.state.firstName
        let lname = this.state.lastName
        let eml = this.state.email
        let msg = this.state.message

        if (fname.trim() === '') {
            issues.push('fnameError')
            errors = true;
        }
        else {
            document.getElementById('fnameError').style.display='none'
        }
        if (lname.trim() === '') {
            issues.push('lnameError')
            errors = true;
        } else {
            document.getElementById('lnameError').style.display='none'
        }
        if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(eml.trim()))) {
            issues.push('emlError')
            errors = true;
        } else {
            document.getElementById('emlError').style.display='none'
        }
        if (msg.length < 10) {
            issues.push('msgError')
            errors = true;
        } else {
            document.getElementById('msgError').style.display='none'
        }

        if (issues.length > 0)
            this.showErrors(issues)
        else
            this.hideErrors(items)


        if (!errors) {
            const templateId = 'template_0z1hapl';
            this.sendFeedback(templateId,
                {
                    message: this.state.message,
                    from_name: this.state.firstName + ' ' + this.state.lastName,
                    reply_to: this.state.email
                })
        }
    }

    sendFeedback (templateId, variables) {
        emailjs.send(
            'service_c4x1lz9', templateId,
            variables
        ).then(res => {
            console.log(res)
            this.successMessage()
            this.clearForm();
            this.hideErrors(items)
        })
            .catch(err => {
                //  additional feature
                //  show modal for errors
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
                    <h1 style={{marginTop: "5%", marginBottom: "5%" }}>Get in touch with us!</h1>
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
                                value={this.state.firstName}
                                onChange={this.handleChange}
                            />
                            <p id={'fnameError'} style={{color: 'red', display: 'none'}}>Please enter a valid first name</p>
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
                            <p id={'lnameError'} style={{color: 'red', display: 'none'}}>Please enter a valid last name</p>
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
                            <p id={'emlError'} style={{color: 'red', display: 'none'}}>Please enter a valid email address</p>
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
                            <p id={'msgError'} style={{color: 'red', display: 'none'}}>Please enter a valid message</p>
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