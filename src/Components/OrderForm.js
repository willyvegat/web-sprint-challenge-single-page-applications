import React from 'react'

export default function OrderForm(props) {
  const { values, submit, change, errors } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  }

  return (
    <div>
      <form id='pizza-form' onSubmit={onSubmit}>
        <h2>Build Your Own Pizza</h2>
        <p>{errors.name}</p>
        <p>{errors.size}</p>
        <p>{errors.sauce}</p>
        <label>
          <h3>Name:</h3>
          <input
            value={values.name}
            onChange={onChange}
            name='name'
            placeholder='Name'
            type='text'
            id="name-input"
          />
        </label> <br/>

        <label>
          <h3>Choice of Size</h3>
          <p>Required.</p>
          <select
            onChange={onChange}
            value={values.size}
            name='size'
            id="size-dropdown"
          >
            <option value=''>- Select an option -</option>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
            <option value='extra-large'>Extra Large</option>
          </select>
        </label> <br/>

        <label>
          <h3>Choice of sauce</h3>
          <p>Required.</p>
          <input
            type="radio"
            name="sauce"
            value="garlic-ranch"
            onChange={onChange}
            checked={values.sauce === "garlic-ranch"}
          />Garlic Ranch
        </label><br/>
        <label>
          <input
            type="radio"
            name="sauce"
            value="original-red"
            onChange={onChange}
            checked={values.sauce === "original-red"}
          />Original Red
        </label><br/>
        <label>
          <input
            type="radio"
            name="sauce"
            value="barbecue-sauce"
            onChange={onChange}
            checked={values.sauce === "barbecue-sauce"}
          />Barbecue Sauce
        </label><br/>
        <label>
          <input
            type="radio"
            name="sauce"
            value="spinach-alfredo"
            onChange={onChange}
            checked={values.sauce === "spinach-alfredo"}
          />Spinach Alfredo
        </label>

        <label>
          <h3>Choice of Toppings</h3>
          <p>Choose up to 8.</p>
          <input 
            type="checkbox"
            name="pepperoni"
            checked={values.pepperoni}
            onChange={onChange}
          />Pepperoni
        </label><br/>
        <label>
          <input 
            type="checkbox"
            name="sausage"
            checked={values.sausage}
            onChange={onChange}
          />Sausage
        </label><br/>
        <label>
          <input 
            type="checkbox"
            name="chicken"
            checked={values.chicken}
            onChange={onChange}
          />Chicken
        </label><br/>
        <label>
          <input 
            type="checkbox"
            name="tomatoes"
            checked={values.tomatoes}
            onChange={onChange}
          />Tomatoes
        </label><br/>
        <label>
          <input 
            type="checkbox"
            name="olives"
            checked={values.olives}
            onChange={onChange}
          />Olives
        </label><br/>
        <label>
          <input 
            type="checkbox"
            name="pineapple"
            checked={values.pineapple}
            onChange={onChange}
          />Pineapple
        </label><br/>
        <label>
          <input 
            type="checkbox"
            name="onions"
            checked={values.onions}
            onChange={onChange}
          />Onions
        </label><br/>
        <label>
          <input 
            type="checkbox"
            name="spinach"
            checked={values.spinach}
            onChange={onChange}
          />Spinach
        </label><br/>

        <label>
          <h3>Special Instructions</h3>
          <input
            value={values.special}
            onChange={onChange}
            name='special'
            type='text'
            placeholder="Anything else you'd like to add?"
            id="special-text"
          />
        </label><br/>

        <button id="order-button">Order</button>
    </form>
    </div>
  )
}