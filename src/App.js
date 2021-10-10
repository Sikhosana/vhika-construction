import React from 'react'
import './App.css'
import Footer from './components/content/Footer'
import logo from "./components/logo/logo.png";
import Home from './components/content/Home'
import Services from "./components/content/Services";
import Gallery from "./components/content/Gallery";
import Contact from "./components/content/Contact";
import About from "./components/content/About";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import {VscMenu, VscChromeClose} from 'react-icons/vsc'


//in this file we need a navigation bar hooked with onclick events that set the react state to allow rendering of the necessary info
class App extends React.Component {
    constructor(props) {
        super(props);
        console.log("set the global state")
        this.toggleMenu = this.toggleMenu.bind(this)
        this.state = {
            current: "home",
            open: false
        }
    }

    toggleMenu() {

        let current_class =
            document.getElementById("list")
                .className;
        if (current_class === "closed") {
            document.getElementById("list")
                .className = "open";
        } else {
            document.getElementById("list")
                .className = "closed";
        }
        this.setState({open: !this.state.open})
    }

    render() {

        return (
            <Router>
                <div id={"page"}>
                    <div id={"topItem"}>
                        <div className={"dropdown_menu"}>
                            <div className={"drop_icons"}>
                                <Link to="/">
                                    <div
                                        className={"container_1"}
                                        onClick={() => this.setState({current: 'home'})}
                                        style={{cursor: "pointer"}}>
                                        <div>
                                            <img
                                                alt={"LOGO HERE"}
                                                src={logo}
                                                className={"logo"}
                                            />
                                        </div>
                                        <div>
                                            <h1>VHIKA</h1>
                                        </div>
                                    </div>
                                </Link>
                                <div className={"menu_item"}>
                                    {!this.state.open &&
                                    <button onClick={this.toggleMenu}>
                                        <VscMenu style={{color: "#164D60"}} size={50}/>
                                    </button>}
                                    {this.state.open &&
                                    <button onClick={this.toggleMenu}>
                                        <VscChromeClose style={{color: "#164D60"}} size={50}/>
                                    </button>}
                                </div>

                            </div>
                            <div id={"dropdown_content"}>
                                <ul id={"list"} className={"closed"}>
                                    <li>
                                        <Link to="/">
                                            <button
                                                onClick={() => this.setState({current: 'home'})}>
                                                <p className={this.state.current === "home" ? "active" : "inactive"}>HOME</p>
                                            </button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/services">
                                            <button
                                                onClick={() => this.setState({current: 'services'})}>
                                                <p className={this.state.current === "services" ? "active" : "inactive"}>SERVICES</p>
                                            </button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/gallery">
                                            <button
                                                onClick={() => this.setState({current: 'gallery'})}>
                                                <p className={this.state.current === "gallery" ? "active" : "inactive"}>GALLERY</p>
                                            </button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/about">
                                            <button
                                                onClick={() => this.setState({current: 'about'})}>
                                                <p className={this.state.current === "about" ? "active" : "inactive"}>ABOUT</p>
                                            </button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">
                                            <button
                                                onClick={() => this.setState({current: 'contact'})}>
                                                <p className={this.state.current === "contact" ? "active" : "inactive"}>CONTACT</p>
                                            </button>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={"container"}>
                            <Link to="/">
                                <div
                                    className={"container_1"}
                                    onClick={() => this.setState({current: 'home'})}
                                    style={{cursor: "pointer"}}>
                                    <div>
                                        <img
                                            alt={"LOGO HERE"}
                                            src={logo}
                                            className={"logo"}
                                        />
                                    </div>
                                    <div>
                                        <h1>VHIKA</h1>
                                    </div>
                                </div>
                            </Link>
                            <div className={"container_2"}>
                                <ul className={"menu"}>
                                    <li>
                                        <Link to="/">
                                            <button
                                                onClick={() => this.setState({current: 'home'})}>
                                                <p className={this.state.current === "home" ? "active" : "inactive"}>HOME</p>
                                            </button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/services">
                                            <button
                                                onClick={() => this.setState({current: 'services'})}>
                                                <p className={this.state.current === "services" ? "active" : "inactive"}>SERVICES</p>
                                            </button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/gallery">
                                            <button
                                                onClick={() => this.setState({current: 'gallery'})}>
                                                <p className={this.state.current === "gallery" ? "active" : "inactive"}>GALLERY</p>
                                            </button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/about">
                                            <button
                                                onClick={() => this.setState({current: 'about'})}>
                                                <p className={this.state.current === "about" ? "active" : "inactive"}>ABOUT</p>
                                            </button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">
                                            <button
                                                onClick={() => this.setState({current: 'contact'})}>
                                                <p className={this.state.current === "contact" ? "active" : "inactive"}>CONTACT</p>
                                            </button>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id={"middleItem"}>
                        <Switch>
                            <Route exact path="/">
                                <Home/>
                            </Route>
                            <Route exact path="/services">
                                <Services/>
                            </Route>
                            <Route exact path="/gallery">
                                <Gallery/>
                            </Route>
                            <Route exact path="/contact">
                                <Contact/>
                            </Route>
                            <Route exact path="/about">
                                <About/>
                            </Route>
                        </Switch>
                    </div>
                    <div id={"bottomItem"}>
                        <Footer/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;