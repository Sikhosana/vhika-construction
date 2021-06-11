import React, {Component} from 'react'
import '../../Styles/Contacts.css'

class Footer extends Component {
    render() {
        return (
            <>
                <div id={"contact-div"}>
                    <div className={"grid-container"}>
                        <div>
                            <p>INNOCENT DOMBO</p>
                        </div>
                        <div>
                            <p><a href={"tel:+263782330171"}>+263 782-330-171</a></p>
                        </div>
                    </div>
                    <div className={"grid-container"}>
                        <div>
                            <p>HTULANI T. CHIPUNZA</p>
                        </div>
                        <div>
                            <p><a href={"tel:+263775314148"}>+263 775-314-148</a></p>
                        </div>
                    </div>
                    <div className={"grid-container"}>
                        <div>
                            <p>PANASHE DHLAKAMA</p>
                        </div>
                        <div>
                            <p><a href={"tel:+263718512214"}>+263 718-512-214</a></p>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}

export default Footer;