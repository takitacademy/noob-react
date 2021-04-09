import React from 'react';
import home from './home.svg'

const Dashboard = () => {
    return (
        <div className='side-bar'>
            <div className='discover'>
                <h3>DISCOVER</h3>
                <div className='disc'>
                    <img src={home} alt=""/>
                    <p>Home</p>
                </div>
                <div className='disc'>
                    <img src={home} alt=""/>
                    <p>Browse</p>
                </div>
                <div className = 'disc drk'>
                    <img src={home} alt=""/>
                    <p>For You</p>
                </div>
            </div>
            <div className='discover'>
                <h3>LIBRARY</h3>
                <div className='disc'>
                    <img src={home} alt=""/>
                    <p>Chefs</p>
                </div>
                <div className='disc'>
                    <img src={home} alt=""/>
                    <p>Favorites</p>
                </div>
                <div className='disc'>
                    <img src={home} alt=""/>
                    <p>My Recipes</p>
                </div>
            </div>
            
            
        </div>
    );
}

export default Dashboard;
