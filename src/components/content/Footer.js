import React, {Component} from 'react'
import '../../Styles/Contacts.css'
import {FcCellPhone} from 'react-icons/fc'

class Footer extends Component {
    render() {
        return (
            <div className={"upper"}>
            <div class={"container_f"}>
                <div id={"phone_numbers"}>
                    <h3 style={{marginLeft: "5px"}}> <FcCellPhone /> Direct lines  </h3> <br/><br/>
                    <div id={"contact-div"}>
                        <div className={"person"}>
                            <div className={"name"}>
                                <p>INNOCENT DOMBO</p>
                            </div>
                            <div>
                                <p><a href={"tel:+263782330171"}>+263 782-330-171</a></p>
                            </div>
                        </div>
                        <div className={"person"}>
                            <div className={"name"}>
                                <p>HTULANI T. CHIPUNZA</p>
                            </div>
                            <div>
                                <p><a href={"tel:+263775314148"}>+263 775-314-148</a></p>
                            </div>
                        </div>
                        <div className={"person"}>
                            <div className={"name"}>
                                <p>PANASHE DHLAKAMA</p>
                            </div>
                            <div>
                                <p><a href={"tel:+263718512214"}>+263 718-512-214</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    //other details
                </div>
                <div>
                    //other details
                </div>
            </div>
        <div className={"copyright"}>
            <h5>&#169; 2021 Vhika Construction</h5>
            <h6>developed by codelum solutions</h6>
        </div>
        </div>

        )
    }
}

export default Footer;