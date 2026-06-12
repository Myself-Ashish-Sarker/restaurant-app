import React from 'react';
import Banner from "./Banner";
import Category from "./Category";
import MainLabel from "./MainLabel";

const Home = () => {
    return (
        <div>
            <Banner />
            <div 
                className="my-24">
                <MainLabel />
            </div>
            <div className="my-10">
                <Category />
            </div>
        </div>
    );
};

export default Home;