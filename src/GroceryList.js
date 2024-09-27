import { Component } from "react";
import bag from "./bag.png";
export class GroceryList extends Component {
    state = {
      userInput:"",
      groceryList: []
    }
   onChangeEvent(e) {
    this.setState ({userInput:e})
    
   }
   addItem(input) {
    if (input === "") {
        alert ("Please enter an item")
    }
    else {
    let listArray = this.state.groceryList;
    listArray.push(input);
    this.setState ({groceryList:listArray, userInput:""})
    }
   }
   crossedWord(event) {
    const li = event.target;
    li.classList.toggle("crossed")
   }
   deleteItem () {
    let listArray = this.state.groceryList;
    listArray= [];
    this.setState ({groceryList:listArray})
   }
  onFormSubmit(e) {
    e.preventDefault()
  }

    render() {
        return(
            <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text" placeholder="What would you like to bue?"
                onChange = { (e)=> this.onChangeEvent(e.target.value)}
                value={this.state.userInput}/>
            </div>
            <div className="container">
                <button onClick = { () => this.addItem(this.state.userInput)} className="btn add">Add</button>
            </div>
            <div >
                <ul>
                    {this.state.groceryList.map((item, index) => (
                        <li onClick = {this.crossedWord} key = {index}>
                            <img src={bag} width="20px" alt="bag"/> {item}</li>
                    ))}
                </ul>
                </div>
                <div className="container">
                    <button onClick = { () => this.deleteItem()} className="btn delete">Delete</button>
                </div>
                </form>
            </div>
            
        )
    }
}