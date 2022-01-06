import './emloyees-add-form.css';
import { Component } from 'react';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }
    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length>=3 && this.state.salary!=='') {
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState ({
            name: '',
            salary: ''
        
        }) }

    }


    render() {
        const { name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form className="add-form d-flex"
                        onSubmit={this.onSubmit}>

                    <input onChange={this.onValueChange} type="text"
                        className="form-control new-post-label"
                        placeholder="Enter name"
                        name="name"
                        value={name} />
                        
                        
                    <input onChange={this.onValueChange} type="number"
                        className="form-control new-post-label"
                        placeholder="Enter salary"
                        name="salary"
                        value={salary}/>
                        
                        
                    <button type="submit"
                        
                        className="btn btn-outline-light">Add</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;