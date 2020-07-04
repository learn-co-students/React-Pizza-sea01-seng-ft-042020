import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    selectedPizza: ''

  }

  componentDidMount = () => {
    this.fetchPizzas()
  }
  fetchPizzas = () => {
    fetch("http://localhost:3000/pizzas")
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        pizzas: data,
        selectedPizza: data
      })
    })
  }

  updateSelectedPizza = (pizza) => {
    console.log(pizza)
    this.setState({selectedPizza: pizza})
  }

  handleEditPizza = () => {
    fetch(`http://localhost:3000/pizzas/${this.state.selectedPizza.id}`,{
      method: 'PATCH',
      headers: {
        "Content-type": "application/json"
      },
    body:JSON.stringify(this.state.selectedPizza)
  })
  .then(resp => resp.json())
  .then(this.fetchPizzas())
  }
  submitSelectedPizza = (e) => {
    if(e.target.name === "vegetarian"){
      this.setState({selectedPizza:{...this.state.selectedPizza, vegetarian: !this.state.selectedPizza.vegetarian}})
     }else{
      this.setState({selectedPizza:{...this.state.selectedPizza, [e.target.name]:e.target.value}})
      }
  }
  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm selectedPizza={this.state.selectedPizza} submitSelectedPizza={this.submitSelectedPizza} handleEditPizza={this.handleEditPizza}/>
        <PizzaList pizzas={this.state.pizzas} updateSelectedPizza={this.updateSelectedPizza}/>
      </Fragment>
    );
  }
}

export default App;
