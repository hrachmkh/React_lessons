import React,{Component} from 'react';

import './ListItem.css';

class ListItem extends Component {
    state={
        done:false
    };
    onChangeDone = () => {
        this.setState((state) => {
            return{
                done:!state.done
            };
        });
    }
    render() {
        const {list}=this.props;
        const {done}=this.state;

        let spanClasses = 'myList';

        spanClasses += list.important ? ' important': '';
        spanClasses += done ? ' done': '';
        return (
            <li className={spanClasses}>  
                <input type="checkbox"/>
                <span className={spanClasses} onClick={this.onChangeDone}>{list.title}</span>
                <button>Delete</button>
            </li>
        );
    }
};

export default ListItem;
