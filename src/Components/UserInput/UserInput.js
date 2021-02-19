import React, {Component} from 'react';

class UserInput extends Component
{
    render() {
        return(
            <div className='UserInput'>
                <input onChange={this.props.editInput} value={this.props.currentValue} />
            </div>
        )
    }
}

export default UserInput;