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
                    increase: false,
                    rise:false
                },
                {
                    id: 202,
                    name: 'Marion Darcy',
                    salary: 950,
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
            ],
            term:'',
            company:'Intel',
            filter:'all'
        }
        this.maxId = 4
    }
    getId=uuidv4;

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
            rise:false,
            id:this.getId()
            // id:this.maxId++
        }
        this.setState(({data}) => {
            const newArr=[...data,newItem]
            return {
                data:newArr
            }
        })
    }

    onToggleIncrease=(id)=>{
       // this.setState(({data})=>{
       //     const index=data.findIndex(elem=>elem.id===id);
       //
       //     const old=data[index];
       //     const newItem={...old,increase:!old.increase}
       //     const newArr=[...data.slice(0,index),newItem,...data.slice(index+1)];
       //
       //     return {
       //         data:newArr
       //     }
       // })

        this.setState(({data})=>({
           data:data.map(item=>{
                if(item.id===id){
                    return {
                        ...item,increase:!item.increase
                    }
                }
                return item;

            })
        }))

    }



    onToggleRise=(id)=>{
        this.setState(({data})=>({
            data:data.map(item=>{
                if(item.id===id){
                    return {
                        ...item,rise:!item.rise
                    }
                }
                return item;


            })
        }))
    }


    onToggleProp=(id,prop)=>{
        this.setState(({data})=>({
            data:data.map(item=>{
                if(item.id===id){
                    return {...item,[prop]: !item[prop]}
                }
                return item

            })
        }))
    }


    searchEmp=(items,term)=>{
        if(term.length===0){
            return items;
        }

        return items.filter(item=>{
            return item.name.indexOf(term)> -1
        })
    }

    onUpdateSearch=(term)=>{
        this.setState({term})
    }

    filterPost=(items,filter)=>{
        switch (filter) {
            case 'all':{
                return items
            }
            case 'rise':{
                return items.filter(items=>items.rise)
            }
            case 'more1000':{
                return items.filter(items=>items.salary>1000)
            }
            default: return items

        }
    }
    onFilterSelect=(filter)=>{
    this.setState({filter})
    }
    render() {
        const {data,term,filter}=this.state;
        const workersCount=this.state.data.length;
        const increasedWorkersCount=this.state.data.filter(item=>item.increase).length
        const visibleData=this.filterPost(this.searchEmp(data,term),filter)



        return (
          <div className="app">
              <AppInfo
                workersCount={workersCount}
                increasedCount={increasedWorkersCount}
                company={this.state.company}
              ></AppInfo>
              <div className="search-panel">
                  <SearchPanel onUpdateSearch={this.onUpdateSearch}></SearchPanel>
                  <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}></AppFilter>
              </div>
              <WorkersList
                data={visibleData}
                // data={this.state.data}
                onDelete={this.deleteItem}
                onToggleIncrease={this.onToggleIncrease}
                onToggleRise={this.onToggleRise}
                onToggleProp={this.onToggleProp}
              ></WorkersList>

              <WorkersAddForm onAdd={this.addItem}></WorkersAddForm>
          </div>
        );
    }
}

export default App;
