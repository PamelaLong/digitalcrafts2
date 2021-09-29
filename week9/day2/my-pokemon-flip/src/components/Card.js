import React, { Component } from 'react'

class Card extends Component {
state = {
    flip: false,
};

flipPokemon = () => {
    this.setState({
        flipPokemon: this.state.flipPokemon,
    });
 };

    render() {
        const {name, hp, sprites } = this.props.pokemon;
        const {flipPokemon} = this.state;
        return (
            <div className='Card'>
                <img src= {flipPokemon ? sprites.back: sprites.front} alt=""/>
                <h2>{hp}</h2>
                <h2>{name}</h2>
                <button>flip</button>
                <button onClick= {this.state.flipPokemon}></button>
            </div>
        );
            
    };
};
export default Card;