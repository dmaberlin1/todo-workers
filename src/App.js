import './App.css';
import AppInfo from "./components/AppInfo";
import SearchPanel from "./components/SearchPanel";
import AppFilter from "./components/AppFilter";
import WorkersList from "./components/WorkersList";
import WorkersAddForm from "./components/WorkersAddForm";
import 'bootstrap/dist/css/bootstrap.css';
import {Component} from "react";
import { v4 as uuidv4 } from 'uuid';


// const data = [
//     {
//         id: 201,
//         name: 'Warrick Walker',
//         salary: 1500,
//         increase: false
//     },
//     {
//         id: 202,
//         name: 'Marion Darcy',
//         salary: 1300,
//         increase: false
//
//     },
//     {
//         id: 203,
//         name: 'Brian Jojo',
//         salary: 1400,
//         increase: false
//
//     },
// ]


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 201,
                    name: 'Warrick Walker',
                    salary: 1500,
                    increase: false
                },
                {
                    id: 202,
                    name: 'Marion Darcy',
                    salary: 1300,
                    increase: false,
                    rise:false

                },
                {
                    id: 203,
                    name: 'Brian Jojo',
                    salary: 1400,
                    increase: false,
                    rise:false

                },
            ]

        }
    }
    getId=uuidv4();

    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index=data.findIndex(elem=>elem.id===id)
            // const before =data.slice(0,index);
            // const after=data.slice(index+1);
            // const newArr=[...before,...after];

            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }
    addItem = (name,salary) => {
        const newItem={
            name,
            salary,
            increase:false,
            id:this.getId()
        }
        this.setState(({data}) => {
            const newArr=[...data,newItem]
            return {
                data:newArr
            }
        })
    }

    onToggleIncrease=(id)=>{
        console.log(`increase this ${id}`)
    }

    onToggleRise=(id)=>{
        console.log(`Rise this ${id}`)
    }

    render() {


        return (
          <div className="app">
              <AppInfo></AppInfo>
              <div className="search-panel">
                  <SearchPanel></SearchPanel>
                  <AppFilter></AppFilter>
              </div>
              <WorkersList
                data={this.state.data}
                onDelete={this.deleteItem}
                onToggleIncrease={this.onToggleIncrease}
                onToggleRise={this.onToggleRise}
              ></WorkersList>

              <WorkersAddForm onAdd={this.addItem}></WorkersAddForm>
          </div>
        );
    }
}

export default App;
