import React from "react"

const PizzaForm = (props) => {

  const handleSubmit = (e) =>{
    props.submitSelectedPizza(e)
  }
  const handleEditSubmit = (e) =>{
    e.preventDefault()
    props.handleEditPizza()
  }
  
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" name="topping" value={
                props.selectedPizza.topping
                
              } onChange={handleSubmit}/>
        </div>
        <div className="col">
          <select value={props.selectedPizza.size} className="form-control" name="size" onChange={handleSubmit}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" name="vegetarian" checked={props.selectedPizza.vegetarian} onChange={handleSubmit}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian"  name="vegetarian" checked={!props.selectedPizza.vegetarian} onChange={handleSubmit}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={handleEditSubmit}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
