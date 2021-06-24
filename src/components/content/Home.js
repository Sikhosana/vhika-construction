import React, {Component} from 'react'
import "../../App.css"

class Home extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <>
                <div className={"homeContent"}>
                    <h1>Hello!</h1>
                </div>
            </>

        )
    }
}

export default Home;