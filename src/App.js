import React from "react";
import { Component } from "react";

import "./styles.css";

import data from "./data.json";

import Item from "./components/item";
import Header from "./components/header";
import Filter from "./components/filter";

export default class App extends Component {
  state = {
    list: data
  };

  // Should change todo to completed or incompleted
  onItemPress = todo => {
    console.log(todo);
  };

  // Should filter items using filter value
  onFilterchange = filterValue => {
    console.log(filterValue);
  };

  render() {
    const { onFilterchange, onItemPress, state } = this;
    const { list } = state;

    return (
      <div className="App">
        <Header />
        <Filter onChange={onFilterchange} />
        {list.map(item => (
          <Item onPress={onItemPress} key={item.id} {...item} />
        ))}
      </div>
    );
  }
}
