import React from 'react';
import { Outlet } from "react-router";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Root = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;