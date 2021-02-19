import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './Components/UserOutput/UserOutput';
import UserInput from "./Components/UserInput/UserInput";

class App extends Component {
    state = {
        outputs: [
            {
                username: 'username 1 in state'
            },
            {
                username: 'username 2 in state'
            }
        ]
    };

    changeUsername = () => {
        this.setState({
            outputs: [
                {
                    username: 'change username 1 in state'
                },
                {
                    username: 'change username 2 in state'
                }
            ]
        })
    };

    editInputHandler = (e) => {
        this.setState({
            outputs: [
                {
                    username: e.target.value
                },
                {
                    username: e.target.value
                }
            ]
        })
    };


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <br/>
                <button onClick={this.changeUsername}>Change Username</button>
                <h1>user input 1</h1>
                <UserInput
                    editInput={this.editInputHandler}
                    currentValue = {this.state.outputs[0].username} />
                <UserOutput username={this.state.outputs[0].username}/>
                <h1>user input 2</h1>
                <UserInput currentValue={this.state.outputs[1].username} />
                <UserOutput username={this.state.outputs[1].username}/>
            </div>
        );
    }
}

export default App;
