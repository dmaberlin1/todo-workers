import './WorkersListItem.css'
import 'bootstrap/dist/css/bootstrap.css';
import starIcon from '../../assets/img/icons/stars-svgrepo-com.svg'
import starFilledIcon from '../../assets/img/icons/stars-svgrepo-com (1).svg'
import likeIcon from '../../assets/img/icons/favorite-good-like-svgrepo-com.svg'
import trashIcon from '../../assets/img/icons/trash-svgrepo-com.svg'
const  WorkersListItem=(props)=>{
    const {name,salary,onDelete,onToggleRise,onToggleIncrease,increase,rise}=props



       return (
         <li className={'list-group-item d-flex justify-content-between'}>
             <span className={'list-group-item-label'} onClick={onToggleRise}>{name}</span>
             <input type="text" className={'list-group-item-input'} defaultValue={`${salary}$`}/>
             <div className={'d-flex justify-content-center align-items-center'}>
                 {rise? <img className={'btn-star'} src={likeIcon} alt="like"/>:''}
                 <button
                   onClick={onToggleIncrease}
                   type={"button"}
                   className={'btn-star'}>
                     {increase ?
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


export default WorkersListItem;


//
// let classNames='list-group-item d-flex justify-content-between'
// if(increase){
//     classNames+=' increase'
// }


//
// constructor(props) {
//     super(props);
//     this.state={
//
//     }
// }
//
// onIncrease=()=>{
//     this.setState(({increase})=>({
//         increase: !increase
//     }))
//     console.log(this.state.increase)
// }
