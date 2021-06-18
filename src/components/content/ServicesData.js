import designs from "../../resources/images/designs-01.png"
import hardscaping from "../../resources/images/hardscaping-01.png"
import lightscaping from "../../resources/images/lightscaping-01.png"
import other_services from "../../resources/images/other_services-01.png"
import softscaping from "../../resources/images/softscaping-01.png"
import waterscaping from "../../resources/images/waterscaping-01.png"

export const ServicesData =
    [
        {
            image_alt: "design image",
            image: designs,
            caption:
                <>
                    <h3>DESIGNS</h3>
                    <br/>
                    <ul style={{color: "#819D5F"}}>
                        <li>Water features (pool and fish pond designs)</li>
                        <li>Lighting Design</li>
                        <li>Green roofs</li>
                        <li>Irrigation systems</li>
                        <li>Garden spaces</li>
                        <li>Park and playground designs</li>
                        <li>Streetscape designing</li>
                        <li>Building and house landscape designs</li>
                        <li>Green infrastructure designs (green storm water management system)</li>
                        <li>Architectural house plan design</li>
                    </ul>
                </>
        },
        {
            image_alt: "hardscaping image",
            image: hardscaping,
            caption:
                <>
                    <h3>HARDSCAPING</h3>
                    <br/>
                    <ul style={{color: "#819D5F"}}>
                        <li>Pavements (Gravel, stone, concrete e.t.c)</li>
                        <li>Wall Cladding</li>
                        <li>Boundary Walls</li>
                        <li>Design of Parking Spaces</li>
                        <li>Rockery</li>
                    </ul>
                </>
        },
        {
            image_alt: "lightscaping image",
            image: lightscaping,
            caption:
                <>
                    <h3>LIGHTSCAPING</h3>
                    <br/>
                    <ul style={{color: "#819D5F"}}>
                        <li>Driveway Lights</li>
                        <li>Boundary Wall Lights</li>
                        <li>Outdoor space lighting</li>
                        <li>Water features lighting</li>
                    </ul>
                </>
        },
        {
            image_alt: "image of red",
            image: softscaping,
            caption: "Our Red Project"
        },
        {
            image_alt: "image of red",
            image: waterscaping,
            caption: "Our Red Project"
        },
        {
            image_alt: "image of other services",
            image: other_services,
            caption: "Our Red Project"
        }
    ]
