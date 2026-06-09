import React from 'react';
import Banner from "./Banner";
import Category from "./Category";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="my-20">
                <Category />
            </div>
        </div>
    );
};

export default Home;