import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from "../assets/banners/01.jpg"
import img2 from "../assets/banners/02.jpg"
import img3 from "../assets/banners/03.png"
import img4 from "../assets/banners/04.jpg"
import img5 from "../assets/banners/05.png"
import img6 from "../assets/banners/06.png"

const Banner = () => {

    const images = [img1, img2, img3, img4, img5, img6];

    return (
        <>
            <Carousel 
                className="w-full mx-auto" 
                dynamicHeight={true}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                stopOnHover={false}
                emulateTouch={true}
                
                >
                {images.map((img, index) => (
                    <div key={index}>
                        <img 
                            src={img} 
                            alt={` ${index + 1}`}
                            className="w-full object-contain" />
                    </div>
                ))}
            </Carousel>
        </>
    );
};

export default Banner;