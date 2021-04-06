import React, { useState } from 'react';

const Recipes = () => {

    const [items, setItems] = useState([
        {
            id:1,
            overview:'Salad with rice and kimchi',
            image: '/img/assassins.png'
        },
        {
            id:2,
            overview:'Pancake with raspberry sauce',
            image: '/img/spiderman.png'
        },
        {
            id:3,
            overview:'Spaghetti with tomato sauce',
            image: '/img/assassins.png'
        },
        {
            id:4,
            overview:'Rice with shrimps and green peas',
            image: '/img/spiderman.png'
        },
        {
            id:5,
            overview:'Cury with chicken and onion',
            image: '/img/assassins.png'
        },
        {
            id:6,
            overview:'Salad with rice and kimchi',
            image: '/img/spiderman.png'
        }
    ]);

    return (
        <div className = 'items'>
            <h3>Daily Best Recipes</h3>
            {items.map((item)=>(
                <div key = {item.id} className='rec' >
                    <img src={item.image} alt=""/>
                    <p>{item.overview}</p>
                </div>
            ))}
        </div>
    )
}

export default Recipes;
