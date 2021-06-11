import React, {Component} from 'react'
import '../../Styles/Navigation.css'
import logo from "../logo/logo.png";


class Navigation extends Component {
    render() {
        return (
            <div className={"container"}>
                <div className={"navbar"}>
                    <div className={"logo_div"}>
                        <img alt={"LOGO HERE"} src={logo} className={"logo"}/>
                    </div>
                    <div className={"navbar_links"}>
                        <ul className={"menu"}>
                            <li><button onClick={this.showContent}>HOME</button></li>
                            <li><button onClick={this.showContent}>SERVICES</button></li>
                            <li><button onClick={this.showContent}>GALLERY</button></li>
                            <li><button onClick={this.showContent}>CONTACT</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation;