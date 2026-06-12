import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaLongArrowAltRight } from "react-icons/fa";

const Category = () => {

    return (
        <>
            <div className="flex flex-col md:flex-row md:justify-between md:px-10 px-5 gap-5">
                <div>
                    <h1 className="text-xl font-semibold">Browser our Hottest </h1>
                    <h1 className="text-xl font-bold text-green-600">Categories</h1>
                </div>
                <div>
                    <button className="btn bg-green-700 text-white">Show All <FaLongArrowAltRight /></button>
                </div>
            </div>
        </>
    );
};

export default Category;