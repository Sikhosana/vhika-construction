import React from 'react'
import './App.css'
import Contacts from './components/content/Contacts'
import Navigation from "./components/navBar/Navigation";


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
            <div>
                <div id={"topItem"}>
                    <Navigation />
                </div>
                <div id={"middleItem"}>

                </div>
                <div id={"bottomItem"}>
                    <Contacts />
                </div>


            </div>
        );
    }
}

export default App;