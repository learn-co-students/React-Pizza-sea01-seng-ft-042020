import React from "react"

const PizzaForm = (props) => {
  const {topping, size, vegetarian } = props.currentPizza


const onChange = (e) => {
  props.handleChange(e)
}

 const handleSubmit = () => {
    props.handlePatch()
  }

  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" name="topping" placeholder="Pizza Topping" onChange={onChange} value={
                topping
              }/>
        </div>
        <div className="col">
          <select value={size} className="form-control" name="size" onChange={onChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="vegetarian" value={'true'} onChange={onChange} checked={vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="vegetarian" value={'false'} onChange={onChange} checked={!vegetarian}/>
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
