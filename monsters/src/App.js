import  {useState,useEffect} from "react";

import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


const App = () => {
    const[searchField, setSearchField] = useState('');
    const[monsters, setMonsters] = useState([]);
    const[filteredMonster, setFilteredMonsters] = useState(monsters);

    console.log('render');





    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => setMonsters(users)
            );
    },[])

    useEffect(() => {
        const newFilteredMonster= monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchField.toLowerCase());
        });

        setFilteredMonsters(newFilteredMonster);
    }, [monsters,searchField]);




    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLowerCase();
        setSearchField(searchFieldString);

        }




    return (
        <div className="App">
            <h1 className='app-title'>Monsters</h1>


            <SearchBox
                onChangeHandler={onSearchChange}
                placeholder='search monsters'
                className='monsters-search-box'
                type='search'
            />
            <CardList monsters={filteredMonster}/>
        </div>
    )
}

// class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             monsters: [],
//             searchField: ''
//         };
//
//     }
//
//     componentDidMount() {
//
//
//     }
//
//
//     onSearchChange = (event) => {
//
//         });
//
//     }
//
//
//     render() {
//
//         const { searchField, monsters } = this.state;
//         const {onSearchChange} = this;
//
//
//         const filteredMonster = monsters.filter((monster) => {
//             return monster.name.toLowerCase().includes(searchField.toLowerCase());
//         });
//
//
//         return (
//
//         );
//     }



export default App;

