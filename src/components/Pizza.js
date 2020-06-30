import React from "react"
import PizzaList from '../containers/PizzaList'
import PizzaForm from "./PizzaForm"

const Pizza = (props) => {

  const handleClick = () => {
    props.handleEdit(props.pizza)
  }
  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{props.pizza.vegetarian === false ? "No" : "Yes"}</td>
      <td><button type="button" className="btn btn-primary" onClick={handleClick} id={props.pizza.id}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
