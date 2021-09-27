import React, { Component, useState } from 'react'

export default class MyProfile extends Component {

    state ={
        firstName: "Pamela",
        lastName: "Long",
        city: "Duluth",
        profilePic: ""
    };
    firstName = () => {
        this.setState({ firstName: this.firstName});
    };
    render() {
        return (
            <div>
                <p>firstName: {this.state.firstName}</p>
                <p>lastName: {this.state.lastName}</p>
                <p>city: {this.state.city}</p>
                <p>profilePic: {this.state.profilePic}</p>
            </div>
        );
    };
}
