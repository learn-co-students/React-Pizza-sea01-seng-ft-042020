import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const API = 'http://localhost:3000/pizzas'

class App extends Component {
  
  state = {
    pizza: [],
    currentPizza: ''
  }
  
  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(pizzas => {
      this.setState({
        pizza: pizzas
      })
    })
  }

  editPizza = (pizza) => {
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
    pizza: [...this.state.pizza.map(pizzaItem => pizzaItem.id === data.id? data : pizzaItem)]
  }))
  }

  render() {
    console.log(this.state)
    return (
      <Fragment>
        <Header/>
        <PizzaForm handlePatch={this.handlePatch} handleChange={this.handleChange} currentPizza={this.state.currentPizza}/>
        <PizzaList pizza={this.state.pizza} editPizza={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;
