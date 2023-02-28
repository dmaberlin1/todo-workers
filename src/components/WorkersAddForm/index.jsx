import React, {Component} from 'react';
import './WorkersAddForm.css'
import 'bootstrap/dist/css/bootstrap.css';
import userIcon from '../../assets/img/icons/user-2-svgrepo-com.svg'
class WorkersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
        }
    }


    // inputNameHandler = (e) => {
    //     this.setState({
    //         name: e.target.value
    //     })
    // }
    //
    // inputSalaryHandler = (e) => {
    //     this.setState({salary: e.target.value})
    // }

    inputHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    formSubmitHandler = (e) => {
      e.preventDefault();
      this.props.onAdd(this.state.name,this.state.salary);
      this.setState({
          name:'',
          salary:''
      })

    }



    render(){
        const{ name,salary}=this.state

        return (
          <div>
              <h3>Добавить нового сотрудника</h3>
              <form action="" onSubmit={this.formSubmitHandler} className={'add-form d-flex'}>
                  <input
                    value={name}
                    onChange={this.inputHandler}
                    placeholder={'Как его зовут?'}
                    type="text"
                    name={'name'}
                    className={'form-control new-post-label'}/>

                  <input
                    value={salary}
                    onChange={this.inputHandler}
                    placeholder={'ЗП в $'}
                    type="number"
                    name={'salary'}
                    className={'form-control new-post-label'}/>
                  <button
                    type={"submit"}
                    className={'btn btn-outline-light'}>
                      <img style={{width:70,height:35}} src={userIcon} alt=""/>
                  </button>
              </form>
          </div>
        );
    }
}

export default WorkersAddForm;
