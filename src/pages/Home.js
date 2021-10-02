import React from 'react';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';

import './Home.css';
import Search from '../components/Search';




const Home = () => {


    return (
        <div className="home">

            {/* Header section */}
            <div className="home__header">
                {/* Left side of the header */}
                <div className="home__headerLeft">
                    {/* Links */}
                    <Link to="about">About</Link>
                    <Link to="about">Store</Link>
                </div>

                {/* Right side of the header */}
                <div className="home__headerRight">
                    {/* Links */}
                    <Link to="about">Gmail</Link>
                    <Link to="about">Images</Link>
                    {/* Icon */}
                    <AppsIcon />
                    {/* Avatar */}
                    <Avatar />
                </div>
            </div>

            {/* Body of Homepage */}
            <div className="home__body">
                {/* Google logo */}
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google logo" />

                <div className="home__inputContainer">
                    <Search />
                </div>
            </div>

        </div>
    );
};

export default Home;
