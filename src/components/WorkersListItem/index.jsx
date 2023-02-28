import './WorkersListItem.css'
import 'bootstrap/dist/css/bootstrap.css';
import starIcon from '../../assets/img/icons/stars-svgrepo-com.svg'
import starFilledIcon from '../../assets/img/icons/stars-svgrepo-com (1).svg'
import likeIcon from '../../assets/img/icons/favorite-good-like-svgrepo-com.svg'
import trashIcon from '../../assets/img/icons/trash-svgrepo-com.svg'
const  WorkersListItem=(props)=>{
    const {name,salary,onDelete,onToggleRise,onToggleIncrease,onToggleProp,increase,rise}=props

let classNames='list-group-item d-flex justify-content-between'
if(increase){
    classNames+=' increase'
}
       return (
         <li className={classNames}>
             <span
               className={'list-group-item-label unselectable'}
                   onClick={onToggleProp}
               data-toggle={'rise'}

             >{name}</span>
             <input type="text" className={'list-group-item-input'} defaultValue={`${salary}$`}/>
             <div className={'d-flex justify-content-center align-items-center'}>
                 {rise
                   ?
                   <div className={'btn-star'}><img className={'star-icon like'} src={likeIcon} alt="like"/></div>
                   :<div className={'btn-star'}></div>}
                 <button
                   onClick={onToggleProp}
                   data-toggle={'increase'}
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
