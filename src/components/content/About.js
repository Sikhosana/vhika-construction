import React, {Component} from 'react'
import '../../styles/about.css'

class About extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <div className={"whole_page"}>
                <div>
                    <h1 style={{marginTop: "5%", marginBottom: "5%" }}>Company Profile</h1>
                </div>
                <div className={"about_content"}>
                    <div className={"about_sections"}>
                        <div className={"about_heads"}>
                            <h2>&#126; Introduction &#126;</h2>
                        </div>
                        <div className={"about_bodies"}>
                            <p>Welcome to the place where beauty and imagination abound. We think that beautiful designs begin with a simple
                                concept and a pen and paper. Vhika Landscaping recognizes how vital it is for clients to have a lasting aesthetic impact,
                                and our strategic and creative professionals are dedicated to tackling the most complicated design difficulties.
                                We will ensure that your expectations are not only fulfilled but surpassed by providing a comprehensive range of services.</p>
                        </div>
                    </div>
                    <div className={"about_sections"}>
                        <div className={"about_heads"}>
                            <h2>&#126; Our Philosophy &#126;</h2>
                        </div>
                        <div className={"about_bodies"}>
                            <p>We have been entrusted with a huge privilege in caring for our fragile planet.
                                Vhika Landscaping believes that well-designed and well-maintained landscapes improve the quality of our lives and help us
                                engage with nature in meaningful ways. We focus on robust root development through strengthening and repairing soil health,
                                which creates the most significant basis for sustainable landscapes.
                                This natural technique eliminates the usage of typical synthetic goods to create ecological balance,
                                allowing plants to better adapt to their environment. Understanding plant biology and closely monitoring soil sample results
                                will enable us to administer just the essential nutrients and organics
                                lacking in the soil profile.
                            </p>
                        </div>
                    </div>
                    <div className={"about_sections"}>
                        <div className={"about_heads"}>
                            <h2>&#126; Our Strategy &#126;</h2>
                        </div>
                        <div className={"about_bodies"}>
                            <p>
                                Our organization has a very efficient and competent workforce.
                                Our clients' pleasure is our principal focus. The squad was formed as a result of the members' unique strengths and professionalism.
                                Our payment plan is flexible, and our garden and lawn designs are extensive and one-of-a-kind. We will make sure that your lawn is constantly green and fresh, regardless of the weather.
                                Our staff comprises highly skilled managers, architects, field employees, and office staff, and together we strive to grow our firm into one of the most outstanding landscaping firms in the region.
                            </p>
                        </div>
                    </div>
                    <div className={"about_sections"}>
                        <div className={"about_heads"}>
                            <h2>&#126; Our Mission &#126;</h2>
                        </div>
                        <div className={"about_bodies"}>
                            <ul>
                                <li>Our loyal business and residential clients are at the heart of our success.</li>
                                <li>To be a responsible, trustworthy, and dependable organization capable of creating long-term partnerships based on mutual respect.</li>
                                <li>To uphold the fundamental principle that quality trumps quantity.</li>
                                <li>To benefit from our experience, efficiency, dedication, and innovation and distribute this profit to our employees.</li>
                                <li>To create a safe and happy work environment in which individual employees' abilities are encouraged, used, and appreciated.</li>
                                <li>To stand behind our products and services to provide complete customer satisfaction.</li>
                                <li>To offer you the most satisfactory service possible while also paying close attention to your landscaping designs.</li>
                                <li>To earn our clients' entire trust via superior performance.</li>
                                <li>To give each customer the finest individualized service possible.</li>
                                <li>To offer all forms of landscaping services, whether maintenance or design.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default About;