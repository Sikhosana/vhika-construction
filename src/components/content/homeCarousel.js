import image1 from "../../resources/images/sample_image_1.png"
import image2 from "../../resources/images/sample_image_2.jpg"


let homeCarousel = {
    height: "40vh",
    width: "60%",
    items: [
        {
            image_alt: "image of green",
            image: image1,
            html_content: <h4>Our Green Project</h4>
        },
        {
            image_alt: "image of red",
            image: image2,
            html_content: <h4>Our Red Project</h4>
        }
    ],
}

export default homeCarousel