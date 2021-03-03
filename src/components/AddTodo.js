import React, { Component } from "react";
class AddTodo extends Component {
    state = {
        title: ""
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
            title:""
        })
    };

    render() {
        return (
            <form className="form-container" onSubmit={this.onSubmit}>
            <input type="text" placeholder="Add Todo..." className="input-text" value={this.state.title} name="title"  onChange={this.onChange}/>
            <input type="submit" value="Submit" className="inputsubmit" />
            </form>
        );
    }
}
export default AddTodo;