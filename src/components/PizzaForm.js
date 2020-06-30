import React from "react"

const PizzaForm = (props) => {

  const handleSubmit = () => {
    props.handlePatch()
  }

  const onChange = (e) => {
    props.handleChange(e)
  }

  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" name="topping" className="form-control" placeholder="Pizza Topping" value={
            props.currentPizza.topping
              } onChange={onChange}/>
        </div>
        <div className="col">
          <select value={props.currentPizza.size} name="size" className="form-control" onChange={onChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" name="vegetarian" type="radio" value={true} checked={props.currentPizza.vegetarian} onChange={onChange}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" name="vegetarian" type="radio" value={false} checked={!props.currentPizza.vegetarian} onChange={onChange}/>
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
