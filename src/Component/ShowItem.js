import React, {Component} from 'react';

export default class ShowItem extends React.Component {
constructor(props){
    super(props);
    this.state = {
        status:"read"
    }

}
checkItem = (id) => {
    this.setState({ status: 'read' });
    this.props.toggleActiveHandler(id);
}

    render(){
        let {todos} = this.props;
        console.log(todos.iscomplete)
        return(
        <li className={todos.iscomplete ? "checked":"" }>
        <input 
        type="checkbox" className="done-todo" 
        checked={todos.iscomplete?"checked":""}
        onClick={e=>this.checkItem(todos.id)}
        />
        {todos.content}
        </li>

        )
    }
}

