import React, {Component} from 'react';
import './WorkersListItem.css'
import 'bootstrap/dist/css/bootstrap.css';
import starIcon from '../../assets/img/icons/stars-svgrepo-com.svg'
import starFilledIcon from '../../assets/img/icons/stars-svgrepo-com (1).svg'
import trashIcon from '../../assets/img/icons/trash-svgrepo-com.svg'
class WorkersListItem extends Component{
    // const {name,salary,increase}=props
    constructor(props) {
        super(props);
        this.state={
            increase:false
        }
    }

    onIncrease=()=>{
     this.setState(({increase})=>({
         increase: !increase
     }))
        console.log(this.state.increase)
    }

   render(){
       const {name,salary,onDelete}=this.props
       const {increase}=this.state
       let classNames='list-group-item d-flex justify-content-between'
       if(increase){
           classNames+=' increase'
       }

       return (
         <li className={classNames}>
             <span className={'list-group-item-label'}>{name}</span>
             <input type="text" className={'list-group-item-input'} defaultValue={`${salary}$`}/>
             <div className={'d-flex justify-content-center align-items-center'}>
                 <button
                   onClick={this.onIncrease}
                   type={"button"}
                   className={'btn-star'}>
                     {this.state.increase ?
                     <img className={'star-icon'} src={starFilledIcon} alt=""/>:
                       <img className={'star-icon'} src={starIcon} alt=""/>
                     }


                 </button>
                 <button
                   onClick={onDelete}
                   type={'button'}
                   className={'btn-star'}>
                     <img className={'star-icon'} src={trashIcon} alt=""/>
                 </button>
             </div>
         </li>
       );
   }
}

export default WorkersListItem;
