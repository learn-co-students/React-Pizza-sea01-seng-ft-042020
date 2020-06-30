import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const API = 'http://localhost:3000/pizzas'

class App extends Component {

  state = {
    pizzas: [],
    currentPizza: ''
  }


componentDidMount() {
  fetch(API)
  .then(resp => resp.json())
  .then(data => {
    this.setState({
      pizzas: data
    })
  })
}

handleEdit = (pizza) => {
  this.setState({
    currentPizza: pizza
  })
}

handleChange = (e) => {
  let selectedPizza = this.state.currentPizza
  this.setState({
    currentPizza: {
      ...selectedPizza, 
      [e.target.name]: e.target.value
    }
  })
}

handlePatch = () => {
  fetch(`${API}/${this.state.currentPizza.id}`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(this.state.currentPizza)
})
.then(resp => resp.json())
.then(data => this.setState({
  pizzas: [...this.state.pizzas.map(pizzaItem => pizzaItem.id === data.id? data : pizzaItem)]
}))
}

  render() {
    console.log(this.state)
    return (
      <Fragment>
        <Header/>
        <PizzaForm currentPizza={this.state.currentPizza} handlePatch={this.handlePatch}
        handleEdit={this.handleEdit} handleChange={this.handleChange}/>
        <PizzaList handleEdit={this.handleEdit} pizzas={this.state.pizzas} />
      </Fragment>
    );
  }
}

export default App;
