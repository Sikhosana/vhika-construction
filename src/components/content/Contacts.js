import React, {Component} from 'react'
import '../../Styles/Contacts.css'

class Contacts extends Component {
    render() {
        return (
            <>
                <div id={"contact-div"}>
                    <div className={"contact-individual"}>
                        <p>INNOCENT DOMBO</p>
                        <a href={"tel:+263782330171"}>+263 782-330-171</a>
                    </div>
                    <div className={"contact-individual"}>
                        <p>HTULANI T.CHIPUNZA</p>
                        <a href={"tel:+263775314148"}>+263 775-314-148</a>
                    </div>
                    <div className={"contact-individual"}>
                        <p>PANASHE DHLAKAMA</p>
                        <a href={"tel:+263718512214"}>+263 718-512-214</a>
                    </div>
                </div>
            </>

        )
    }
}

export default Contacts;