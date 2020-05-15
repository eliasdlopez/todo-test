import React from "react";
import { Component } from "react";

import "./styles.css";

import data from "./data.json";

import Item from "./components/item";
import Header from "./components/header";
import Filter from "./components/filter";

export default class App extends Component {
  state = {
    list: data,
    search: ''
  };

  // Should change todo to completed or incompleted
  onItemPress = todo => {
    console.log(todo);
    let modifiedTasks = data.map((val, i) => {
      if (i === todo.id -1) {
        val.completed = !val.completed
      }
      return val;
    })
    this.setState({
      list: modifiedTasks
    })
  };

  // Should filter items using filter value
  onFilterchange = filterValue => {
    if (filterValue) {
      this.setState({
        search: filterValue
      })
      console.log(filterValue)
    }
  };

  render() {
    const { onFilterchange, onItemPress, state } = this;
    const { list } = state;

    let searchString = this.state.search.trim().toLowerCase();
    
    let filteredTasks = data.filter(function(i) {
      return i.title.toLowerCase().includes( searchString );
      });

    // if (searchString.length > 0) {
      
    //   filteredTasks = data.filter(function(i) {
    //   return i.title.toLowerCase().includes( searchString );
    //   });
    // }
    

    return (
      <div className="App">
        <Header />
        <Filter onChange={onFilterchange} />
        {filteredTasks.map(item => (
          <Item onPress={onItemPress} key={item.id} {...item} />
        ))}
      </div>
    );
  }
}
