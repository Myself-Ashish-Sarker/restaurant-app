import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from "../assets/banners/01.jpg"
import img2 from "../assets/banners/02.webp"
import img3 from "../assets/banners/03.webp"
import img4 from "../assets/banners/04.webp"
import img5 from "../assets/banners/05.webp"
import img6 from "../assets/banners/06.webp"

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
                stopOnHover={true}
                emulateTouch={true}
                showArrows={false}
                showThumbs={false}
                swipeable={false}
                
                >
                {images.map((img, index) => (
                    <div key={index}>
                        <img 
                            src={img} 
                            alt={` ${index + 1}`}
                            className="w-full object-contain mt-16" />
                    </div>
                ))}
            </Carousel>
        </>
    );
};

export default Banner;