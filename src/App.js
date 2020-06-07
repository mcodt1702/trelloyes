import React, { Component } from "react";
import List from "./List";
import "./App.css";

class App extends Component {
  state = { ...this.props.store };

  handleDeleteCard = (listId, cardId) => {
    this.setState({
      lists: this.state.lists.map((list) => {
        list.cardIds =
          list.id === listId
            ? list.cardIds.filter((cId) => cId !== cardId)
            : list.cardIds;
        return list;
      }),
    });
  };




  
    newRandomCard = () => {
      const id = Math.random().toString(36).substring(2, 4)
        + Math.random().toString(36).substring(2, 4);
      return {
        id,
        title: `Random Card ${id}`,
        content: 'lorem ipsum',
      }
    

 


  }

  render() {
    const { lists, allCards } = this.state;
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {lists.map((list, i) => (
            <List
              key={list.id}
              header={list.header}
              id={list.id}
              cards={list.cardIds.map((id) => allCards[id])}
              handleDeleteCard={this.handleDeleteCard}
              newRandomCard={this.newRandomCard}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
