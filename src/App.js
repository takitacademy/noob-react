import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Showcase from "./components/Showcase";


function App() {
                
  return (
    <div className="App">

      <Header />

      <div className = "container">
        <Dashboard />
        <div className="right">
          <Showcase />
          <Recipes/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
