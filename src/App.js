import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";

import Home from "./Components/Home";
import  OrderForm from "./Components/OrderForm";

const initialFormValues = {
  name: '',
  size: '',
  sauce: '',
  pepperoni: false,
  sausage: false,
  chicken: false,
  tomatoes: false,
  olives: false,
  pineapple: false,
  onions: false,
  spinach: false,
  special: ''
}


const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues)

  return (
    <>
      <nav>
      <h1>Bloomtech Eats</h1>
        <div className='nav-links'>
          {/* 👉 STEP 3 - Make Links to navigate us Home (`/`) and Shop (`/items-list`) */}
          <Link to="/" id="order-pizza"><button>Home</button></Link>
          <Link to="/pizza" id="order-pizza"><button>Order</button></Link>
        </div>
      </nav>
      <Switch>
        <Route path="/pizza">
            <OrderForm values={formValues}/>
        </Route>  
        <Route path="/">
            <Home />
        </Route>
      </Switch> 
    </>
  );
};
export default App;
