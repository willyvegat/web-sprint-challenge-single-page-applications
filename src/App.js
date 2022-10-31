import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";

import Home from "./Components/Home";
import  OrderForm from "./Components/OrderForm";

import schema from "./validation/formSchema";
import * as yup from 'yup';
import axios from 'axios';

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

const initialFormErrors = {
  name: '',
  size: '',
  sauce: '',
}

const initialOrders = [];

const App = () => {
  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const postNewOrder = newOrder => {
    axios.post("https://reqres.in/api/orders", newOrder)
      .then(res => {
        // console.log(res);
        setOrders([ res.data, ...orders ]);
      })
      .catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues));
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ""}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value })
  }

  const orderSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      sauce: formValues.sauce,
      toppings: [
        "pepperoni",
        "sausage",
        "chicken",
        "tomatoes",
        "olives",
        "pineapple",
        "onions",
        "spinach"]
          .filter(topping => !!formValues[topping])
    }
    postNewOrder(newOrder);
  }

  return (
    <>
      <nav>
      <h1>Bloomtech Eats</h1>
        <div className='nav-links'>
          <Link to="/" id="order-pizza"><button>Home</button></Link>
          <Link to="/pizza"><button>Order</button></Link>
        </div>
      </nav>
      <Switch>
        <Route path="/pizza">
            <OrderForm 
              values={formValues}
              change={inputChange}
              submit={orderSubmit}
              errors={formErrors}
            />
        </Route>  
        <Route path="/">
            <Home />
        </Route>
      </Switch> 
    </>
  );
};
export default App;
