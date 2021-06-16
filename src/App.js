import React from 'react'
import './App.css'
import Footer from './components/content/Footer'
import logo from "./components/logo/logo.png";
import Home from './components/content/HomeComponent'
import Services from "./components/content/ServicesComponent";
import Gallery from "./components/content/GalleryComponent";
import Contact from "./components/content/ContactComponent";


//in this file we need a navigation bar hooked with onclick events that set the react state to allow rendering of the necessary info
class App extends React.Component {
    constructor(props) {
        super(props);
        console.log ("set the global state")
        this.state = { current: "home"}
    }

    showContent = (name) => {
        console.log("called function")
        this.setState({current: name});
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
                                    <li><button onClick={() => this.setState({current: 'home'})} >HOME</button></li>
                                    <li><button onClick={() => this.setState({current: 'services'})} >SERVICES</button></li>
                                    <li><button onClick={() => this.setState({current: 'gallery'})} >GALLERY</button></li>
                                    <li><button onClick={() => this.setState({current: 'contact'})} >CONTACT</button></li>
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