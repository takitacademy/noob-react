import React from 'react';
import profile from './profile.png';

const Header = () => {
    return (
        <div className = 'main-header'>
            <h2>Cookz</h2>
            <input type="text" placeholder = 'Search by Recipe...'/>
            <div className='avatar'>
                <img src={profile} alt="img"/>
                <h4>NoobMaester</h4>
            </div>
        </div>
    )
}
export default Header;
