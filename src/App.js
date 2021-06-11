import React from 'react'
import './App.css'
import './index.css'
import Contacts from './components/content/Contacts'
import Logo from './components/logo/Logo';


//in this file we need a navigation bar hooked with onclick events that set the react state to allow rendering of the necessary info
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { current: "home"}
    }
    showContent = (name) => {
        this.setState({current: name});
    }
    render() {

        return (
            <>
                <nav>
                    <div className={"logo"}>
                        <Logo />
                    </div>
                    <div className={"nav-links"}>
                        <button id={"nav-item"} onClick={this.showContent}>HOME</button>
                        <button id={"nav-item"} onClick={this.showContent}>SERVICES</button>
                        <button id={"nav-item"} onClick={this.showContent}>GALLERY</button>
                        <button id={"nav-item"} onClick={this.showContent}>CONTACT</button>
                    </div>
                </nav>

                <Contacts />

            </>
        );
    }
}

export default App;