import React, {Component} from 'react';
import './AppFilter.css'
import 'bootstrap/dist/css/bootstrap.css';

const buttonsData=[
    {name:'all',label:'Все сотрудники'},
    {name:'rise',label:'На повышение'},
    {name:'more1000',label:'Зарплата больше 1000$'},
]
class AppFilter extends Component  {

    constructor(props) {
        super(props);

    }


   render(){
        const buttons=buttonsData.map(({name,label})=>{
            const active=this.props.filter===name;
            const clazz=active? 'btn-light' :'btn-outline-light'
            return (
              <button
                onClick={()=>onFilterSelect(name)}
                type={"button"}
                value={'all'}
                key={name}
                className={`btn ${clazz}`} >
                  {label}
              </button>
            )
        })
        const {filter,onFilterSelect}=this.props
       return (
         <div className={'btn-group'}>
             {buttons}
         </div>
       );
   }
}

export default AppFilter;
