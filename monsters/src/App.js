import {Component} from "react";

import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: ''
        };

    }

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => this.setState(() => {
                return {monsters: users}
            }));
    }


    onSearchChange = (event) => {
        const searchField = event.target.value.toLowerCase();
        this.setState(() => {
            return {searchField};
        });

    }


    render() {

        const { searchField, monsters } = this.state;
        const {onSearchChange} = this;


        const filteredMonster = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchField.toLowerCase());
        });


        return (
            <div className="App">

                <h1 className='app-title'>Monsters</h1>
                <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='monsters-search-box' type='search'/>
                <CardList monsters={filteredMonster} />
            </div>
        );
    }

}

export default App;

