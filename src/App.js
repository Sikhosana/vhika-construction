import React from 'react'


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

                    </div>
                    <div className={"nav-links"}>
                        <button id={"nav-item"} onClick={this.showContent}>HOME</button>
                        <button id={"nav-item"} onClick={this.showContent}>SERVICES</button>
                        <button id={"nav-item"} onClick={this.showContent}>GALLERY</button>
                        <button id={"nav-item"} onClick={this.showContent}>CONTACT</button>
                    </div>
                </nav>

                {/*{this.state.current == 'home' && }*/}
                {/*{this.state.current == 'home' && }*/}
                {/*{this.state.current == 'home' && }*/}
                {/*{this.state.current == 'home' && }*/}

            </>
        );
    }
};

export default App;