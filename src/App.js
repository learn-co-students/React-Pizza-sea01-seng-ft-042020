import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    selectedPizza: ''

  }
   fetchPizzas = () =>{
    fetch("http://localhost:3000/pizzas")
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        pizzas: data,
        selectedPizza: data[0]
      })
    })
  }

  componentDidMount = () => {
    this.fetchPizzas()
  }

  updateSelectedPizza = (pizza) => {
    this.setState({selectedPizza:pizza})
  }
  handleupdateSelectedPizza= (e) => {
    if(e.target.name === "vegetarian"){
      this.setState({selectedPizza:{...this.state.selectedPizza, vegetarian: !this.state.selectedPizza.vegetarian}})
    }else{
      this.setState({...this.state.selectedPizza, [e.target.name]: e.target.value})
     }
  }
  handleEditSubmit = () => {
    fetch(`http://localhost:3000/pizzas ${this.state.selectedPizza.id}`, {
      method: "PACH",
      "Content-type": "application/json",
       Accept: "application/json",

       body: JSON.stringify(this.state.selectedPizza)
      })
      .then(resp => resp.json())
      .then(this.fetchPizzas)
  }
  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm selectedPizza={this.state.selectedPizza} handleupdateSelectedPizza={this.handleupdateSelectedPizza} handleEditSubmit={this.handleEditSubmit} />
        <PizzaList pizzas={this.state.pizzas} updateSelectedPizza={this.updateSelectedPizza}/>
      </Fragment>
    );
  }
}

export default App;
