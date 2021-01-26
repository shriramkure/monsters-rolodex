import './App.css';
import { Component } from 'react';
import {CardList} from './components/card-list/card-list.component'
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component{

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchTerm: ""
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( Response => Response.json())
    .then( users => this.setState({ monsters: users }) )
  }

  render() {
    const {monsters, searchTerm} = this.state;
    const filteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
         <SearchBox
         placeholder="Search Monsters"
         handleChange={e => this.setState({searchTerm: e.target.value})}          
         />
        <CardList monsters={filteredMonsters}>
        </CardList>      
      </div>
    )
  }
}

export default App;
