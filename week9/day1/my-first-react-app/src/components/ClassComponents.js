import React, { Component } from "react";


export default class ClassComponent extends Component {
    state = {
        counter: 0,
        studentName: "Pamela",
};
    IncreaseCounter = () => {
        this.setState({ counter: this.state.counter + 1 });
    };

    DecreaseCounter = () => {
        this.setState({ counter: this.state.counter - 1 });
    };
    ChangeStudent = () => {
        let name = "Bernie"
        this.setState({studentName: name});
    };
    render() {
        return (
            <div>
                <p>Class Counter</p>
                <p>Student name: {this.state.studentName}</p>
                <p>counter is : {this.state.counter}</p>
                <button onClick={this.IncreaseCounter}>Increase</button>
                <button onClick={this.DecreaseCounter}>Decrease</button>
                <button>Change The Student</button>
            </div>
        );
    }
    }
