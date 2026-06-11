import { useState } from "react";
import farm from "../assets/icon/main-label/farm.png";
import farm_hover from "../assets/icon/main-label/farm-hover.png";
import house from "../assets/icon/main-label/house.png";
import house_hover from "../assets/icon/main-label/house-hover.png";
import bag from "../assets/icon/main-label/bag.png"
import bag_hover from "../assets/icon/main-label/bag-hover.png"
import tag from "../assets/icon/main-label/tag.png"
import tag_hover from "../assets/icon/main-label/tag-hover.png"

const MainLabel = () => {

    const [isHovered, setIsHovered] = useState(false);

    const labels = [
        { id: 1, defaultImg: farm, hoverImg: farm_hover, text: "Oragnic Product"},
        { id: 2, defaultImg: house, hoverImg: house_hover, text: "Free Delivery"},
        { id: 3, defaultImg: bag, hoverImg: bag_hover, text: "Promotional Week"},
        { id: 4, defaultImg: tag, hoverImg: tag_hover, text: "~20% Discount"},
    ]

    return (
        <div className="grid grid-col grid-cols-1 md:grid-cols-2 px-8 md:px-2 lg:grid-cols-4 lg:px-30 justify-center items-center gap-6">

            {
                labels.map((label, index) => (
                    <div
                        className="flex items-center p-6 border hover:bg-emerald-700 hover:text-white rounded-md"
                        onMouseEnter={() => setIsHovered(index)}
                        onMouseLeave={() => setIsHovered(null)}
                    >
                        <div
                            className="flex items-center gap-2">
                            <img
                                className="h-5 w-5 lg:h-10 lg:w-10"
                                src={isHovered === index ? label.hoverImg : label.defaultImg}
                                alt="farm" />
                            <p className="lg:text-2xl ">{label.text}</p>
                        </div>
                    </div>
                ))
            }

        </div>
    );
};

export default MainLabel;