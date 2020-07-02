import React from "react"

const PizzaForm = (props) => {
   const handleChange= (e) =>{
   props.handleupdateSelectedPizza(e)
   }
   const handleSubmit = (e) => {
      props.handleEditSubmit(e)
   }

  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" name="toppings" value={
                props.selectedPizza.topping 
              } onChange={handleChange}/>
        </div>
        <div className="col">
          <select value={null} className="form-control" name="size">
            <option value="Small">{props.selectedPizza.size}</option>
            <option value="Medium">{props.selectedPizza.size}</option>
            <option value="Large">{props.selectedPizza.size}</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" name="vegetarian" checked={props.selectedPizza.vegetarian} onChange={handleChange}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" name="vegetarian" checked={!props.selectedPizza.vegetarian} onChange={handleChange}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={handleSubmit}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
