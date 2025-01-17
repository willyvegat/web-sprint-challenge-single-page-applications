import React from 'react'
import { useHistory } from "react-router-dom";

export default function Home() {
    const history = useHistory();

    const routeToOrder = () => {
        history.push("/pizza");
      }  

  return (
    <div className='home-wrapper'>
      <img
        className='pizza-image'
        src='https://vendify-demos.astoundify.com/tasti/wp-content/uploads/sites/4/2020/12/top-view-pepperoni-pizza-sliced-into-six-slices-1536x1024.jpg'
        alt='pizza'
      />
      <button
        id='order-pizza'
        onClick={routeToOrder}
      >
        Order now!
      </button>
    </div>
  )
}