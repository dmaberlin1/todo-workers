import './App.css';
import AppInfo from "./components/AppInfo";
import SearchPanel from "./components/SearchPanel";
import AppFilter from "./components/AppFilter";
import WorkersList from "./components/WorkersList";
import WorkersAddForm from "./components/WorkersAddForm";
import 'bootstrap/dist/css/bootstrap.css';
import {Component} from "react";

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
        this.state={
             data:[
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
                    increase: false

                },
                {
                    id: 203,
                    name: 'Brian Jojo',
                    salary: 1400,
                    increase: false

                },
            ]

        }
    }

    deleteItem=(id)=>{
        this.setState(({data})=>{
            const index=
        })
    }
    render() {


        return (
          <div className="app">
              <AppInfo></AppInfo>
              <div className="search-panel">
                  <SearchPanel></SearchPanel>
                  <AppFilter></AppFilter>
              </div>
              <WorkersList data={this.state.data} onDelete={this.deleteItem}></WorkersList>
              <WorkersAddForm></WorkersAddForm>
          </div>
        );
    }
}

export default App;
