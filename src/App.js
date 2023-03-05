
import './App.css';

import React, { Component } from 'react';
import Listitem from './Listitem';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
library.add(faTrash)
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      currentitem: {
        text: "",
        key: ""
      }
    }
    this.inputitem = this.inputitem.bind(this)
    this.additem = this.additem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.setUpdate = this.setUpdate.bind(this)
  }

  inputitem = (event) => {
    this.setState({
      currentitem:{
        text: event.target.value,
        key: Date.now()
      }
    })
  }

  additem = (event) => {
    event.preventDefault();
    const newitem = this.state.currentitem;
    console.log(newitem)
    if (newitem.text !== "") {
      const newitems = [...this.state.items, newitem];
      this.setState({
        items: newitems,
        currentitem: {
          text: "",
          key: ""
        }
      })
    }
  }

  deleteItem(key){
    const filteritems = this.state.items.filter((item) => item.key !== key)
    this.setState({
      items:filteritems,
    });
  }

  setUpdate(text,key){
    const items =this.state.items;
    items.map(item =>{
      if(item.key === key){
        item.text = text;
      }
    })
    this.setState({
      item:items
    })
  }
  render() {
    return (
      <div className="container">
        <header>
          <form className='to-do-form' onSubmit={this.additem}>
            <input className='inputfield' type="text" placeholder="Enter text" value={this.state.currentitem.string} onChange={this.inputitem} />
            <button className='btn' type='submit'>Add</button>
          </form>
        </header>
            <Listitem items={this.state.items}
            deleteItem={this.deleteItem}
            setUpdate = {this.setUpdate}>
           
            </Listitem>
      </div>
    );
  }
}

export default App;

