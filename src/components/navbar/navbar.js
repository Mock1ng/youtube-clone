import React from 'react';

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="navbar-left">
                <div className="humburger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div className="youtube-logo">Logo</div>
            </div>
            <div className="navbar-search">
                <form action="#">
                    <input type="text" placeholder='Search' className='search-box'/>
                    <button className='search-button'>Magnifier</button>
                </form>
            </div>
            <div className="navbar-right">
                <div className="panel-upload">+</div>
                <div className="panel-products">Products</div>
                <div className="panel-notification"></div>
            </div>
        </div>
    )
}

export default Navbar;