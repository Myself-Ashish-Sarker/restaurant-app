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

    const labels = [
        { id: 1, defaultImg: farm, text: "Oragnic Product" },
        { id: 2, defaultImg: house, text: "Free Delivery" },
        { id: 3, defaultImg: bag, text: "Promotional Week" },
        { id: 4, defaultImg: tag, text: "~20% Discount" },
    ]

    return (
        <>
            <h1 className="text-center text-6xl font-bold pb-7">Find Excellence</h1>
            <div className="grid grid-col grid-cols-2 md:grid-cols-4 px-8 md:px-10 lg:grid-cols-4 lg:px-30 justify-center items-center gap-6">

                {
                    labels.map((label, index) => (
                        <div
                            className="flex items-center p-6"
                            onMouseEnter={() => setIsHovered(index)}
                            onMouseLeave={() => setIsHovered(null)}
                        >
                            <div
                                className="flex items-center gap-2">
                                <img
                                    className="h-5 w-5 lg:h-10 lg:w-10"
                                    src={label.defaultImg}
                                    alt="farm" />
                                <p className="md:text-lg lg:text-2xl ">{label.text}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    );
};

export default MainLabel;