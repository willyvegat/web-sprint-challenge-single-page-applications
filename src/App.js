import React, { useState } from "react";
import { Route, Link } from "react-router-dom";

import Home from "./Components/Home";
import  OrderForm from "./Components/OrderForm";

const App = () => {
  return (
    <>
      <nav>
      <h1>Bloomtech Eats</h1>
        <div className='nav-links'>
          {/* 👉 STEP 3 - Make Links to navigate us Home (`/`) and Shop (`/items-list`) */}
          <Link to="/" id="order-pizza"><button>Home</button></Link>
          <Link to="/pizza"><button>Order</button></Link>
        </div>
      </nav>
      
      <Route path={"/pizza"}>
          <OrderForm />
      </Route>
        <Route path="/">
          <Home />
        </Route>
      
      {/* <Switch>
        
      </Switch> */}
    </>
  );
};
export default App;
