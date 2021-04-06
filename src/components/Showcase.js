
const Showcase = () => {
    const recipes = [
        {
          id: 1,
          title: "mac and cheese",
          image: ''
        },
        {
          id: 2,
          title: "Super taco for the whole family",
          image: ''
        },
        {
          id: 3,   
          title: "Homemade sushi",
          image: ''
        }
    ];  
    
    return (
        <div>
            {recipes.map((recipe) => (
                <div key={recipe.id} className = 'showcase'>
                    <h4>{recipe.title}</h4>
                </div>
            ))}
        </div>
    )
}
export default Showcase;
