import React from 'react'
import './App.css'
import Footer from './components/content/Footer'
import logo from "./components/logo/logo.png";
import Home from './components/content/Home'
import Services from "./components/content/Services";
import Gallery from "./components/content/Gallery";
import Contact from "./components/content/Contact";


//in this file we need a navigation bar hooked with onclick events that set the react state to allow rendering of the necessary info
class App extends React.Component {
    constructor(props) {
        super(props);
        console.log ("set the global state")
        this.state = { current: "home"}
    }

    render() {

        return (
            <div id={"page"}>
                <div id={"topItem"}>
                    <div className={"container"}>
                            <div className={"container_1"}>
                                <div>
                                    <img alt={"LOGO HERE"} src={logo} className={"logo"}/>
                                </div>
                                <div>
                                    <h1>VHIKA</h1>
                                </div>
                            </div>
                            <div className={"container_2"}>
                                <ul className={"menu"}>
                                    <li>
                                        <button
                                            onClick={() => this.setState({current: 'home'})} >
                                            <p className={this.state.current === "home" ? "active" : "inactive"}>HOME</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                        onClick={() => this.setState({current: 'services'})} >
                                            <p className={this.state.current === "services" ? "active" : "inactive"}>SERVICES</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                        onClick={() => this.setState({current: 'gallery'})} >
                                            <p className={this.state.current === "gallery" ? "active" : "inactive"}>GALLERY</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => this.setState({current: 'about'})} >
                                            <p className={this.state.current === "about" ? "active" : "inactive"}>ABOUT</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                        onClick={() => this.setState({current: 'contact'})} >
                                            <p className={this.state.current === "contact" ? "active" : "inactive"}>CONTACT</p>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </div>
                <div id={"middleItem"}>
                        {this.state.current === 'home' && <Home />}
                        {this.state.current === 'services' && <Services />}
                        {this.state.current === 'gallery' && <Gallery />}
                        {this.state.current === 'contact' && <Contact />}
                </div>
                <div id={"bottomItem"}>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;