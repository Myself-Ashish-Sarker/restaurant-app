import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from "../assets/banners/01.jpg"
import img2 from "../assets/banners/02.jpg"

const Banner = () => {

    const images = [img1, img2];

    return (
        <>
            <Carousel 
                className="" 
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                stopOnHover={false}
                emulateTouch={true}
                showArrows={false}
                showThumbs={false}
                swipeable={false}
                showIndicators={false}
                >
                {images.map((img, index) => (
                    <div key={index}>
                        <img 
                            src={img} 
                            alt={` ${index + 1}`}
                            className=" mt-16" />
                    </div>
                ))}
            </Carousel>
        </>
    );
};

export default Banner;