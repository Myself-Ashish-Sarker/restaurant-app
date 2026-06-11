import React from 'react';
import Banner from "./Banner";
import Category from "./Category";
import MainLabel from "./MainLabel";

const Home = () => {
    return (
        <div>
            <Banner />
            {/* <div className="my-20"><Category /></div> */}
            <div 
                className="my-5">
                <MainLabel />
            </div>


        </div>
    );
};

export default Home;