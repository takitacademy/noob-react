
const Showcase = () => {
    const recipes = [
        {
          id: 1,
          title: "Big Mac and Cheese",
          image: ''
        },
        {
          id: 2,
          title: "Super Taco for the whole Family",
          image: ''
        },
        {
          id: 3,   
          title: "Homemade Sushi",
          image: ''
        }
    ];  
    
    return (
        <div className = 'showcase'>
            {recipes.map((recipe) => (
                <div key={recipe.id} className='show'>
                  <h4>{recipe.title}</h4>
                </div>
            ))}
        </div>
    )
}
export default Showcase;
