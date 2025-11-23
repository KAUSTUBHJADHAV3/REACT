import FoodItems  from "./componets/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorMessage from "./componets/ErrorMessage.jsx";
function App() {
 // let foodItems = [];
 let foodItems =["matan", "Green Vegetable","Roti","Salad","Milk","Ghee"];
return( 
  <>
<h1 className="food-heading">Healthy Food</h1>
<ErrorMessage items={foodItems}></ErrorMessage>
<FoodItems items={foodItems}></FoodItems>
  </>
); 
}

export default App;
