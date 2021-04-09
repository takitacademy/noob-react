
const Recipes = () => {

    const items = ([
        {
            id:1,
            overview:'Salad with rice and kimchi',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx0IW9lxFRWV-bjVqjrUV5iBjDnb_XA29nVw&usqp=CAU'
        },
        {
            id:2,
            overview:'Pancake with raspberry sauce',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx0IW9lxFRWV-bjVqjrUV5iBjDnb_XA29nVw&usqp=CAU'
        },
        {
            id:3,
            overview:'Spaghetti with tomato sauce',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrifAucBU98yLA0tsYNiIM2La8ZLYdRfsToQ&usqp=CAU'
        },
        {
            id:4,
            overview:'Rice with shrimps and green peas',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx0IW9lxFRWV-bjVqjrUV5iBjDnb_XA29nVw&usqp=CAU'
        },
        {
            id:5,
            overview:'Cury with chicken and onion',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx0IW9lxFRWV-bjVqjrUV5iBjDnb_XA29nVw&usqp=CAU'
        },
        {
            id:6,
            overview:'Salad with rice and kimchi',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx0IW9lxFRWV-bjVqjrUV5iBjDnb_XA29nVw&usqp=CAU'
        }
    ]);

    return (
        <div className = 'items'>
            <h3>Daily Best Recipes</h3>
            <div className="sushi">
                {items.map((item)=>(
                    <div key = {item.id} className='rec' >
                        <img src={item.image} alt=""/>
                        <p>{item.overview}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Recipes;
