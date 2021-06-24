import React, {Component} from 'react'
import '../../styles/footer.css'
import {BiPhone} from 'react-icons/bi'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

class Footer extends Component {

    render() {
        return (
            <div className={"upper"}>
            <div className={"container_f"}>
                <div id={"phones"}>
                    <h3> <BiPhone /> DIRECT LINES  </h3> <br/>
                    <div id={"contact-div"}>
                        <div className={"person"}>
                            <div className={"name"}>
                                <p>Innocent Dombo</p>
                            </div>
                            <div>
                                <p><a href={"tel:+263782330171"}>+263 782-330-171</a></p>
                            </div>
                        </div>
                        <div className={"person"}>
                            <div className={"name"}>
                                <p>Htulani T. Chipunza</p>
                            </div>
                            <div>
                                <p><a href={"tel:+263775314148"}>+263 775-314-148</a></p>
                            </div>
                        </div>
                        <div className={"person"}>
                            <div className={"name"}>
                                <p>Panashe Dhlakama</p>
                            </div>
                            <div>
                                <p><a href={"tel:+263718512214"}>+263 718-512-214</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id={"socials"}>
                    <h3 style={{marginLeft: "5px"}}>Our Social</h3> <br/><br/>

                    <div id={"social_icons"}>
                        <div>
                            <a href={"https"} id={"facebook"}><FaFacebook size={42}/></a>
                        </div>
                        <div>
                            <a href={"https"} id={"instagram"}><FaInstagram size={42}/></a>
                        </div>
                        <div>
                            <a href={"https"} id={"twitter"}><FaTwitter size={42}/></a>
                        </div>
                    </div>
                </div>
                <div id={"location"}>
                    <br/> <br/> <br/>
                    <div id={""}>
                        <h3>Vhika Construction</h3>
                        <p>XXX Drive</p>
                        <p>Harare</p>
                        <p>Zimbabwe</p>
                    </div>
                </div>
            </div>
        <div className={"copyright"}>
            <h5>&#169; 2021 Vhika Construction</h5>
            <h6>site developed by codelum</h6>
        </div>
        </div>

        )
    }
}

export default Footer;