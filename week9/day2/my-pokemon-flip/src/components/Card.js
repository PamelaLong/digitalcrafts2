import React, { Component } from 'react'

class Card extends Component {
state = {
    flip: false,
    // delete: true,
};

flipPokemon = () => {
    this.setState({
        flipPokemon: this.state.flipPokemon,
    });
 };

 deletePokemon = () => {
    this.setState({
        deletePokemon: this.state.deletePokemon,
    });
 };
    render() {
        const {flipPokemon} = this.state;
        const {name, hp, sprites } = this.props.pokemon;
        return (
            <div className='Card'>
                <img src= {flipPokemon ? sprites.back: sprites.front} alt=""/>

                <p>{name}</p>
                <p>HP : {hp}</p>
                
                <button onClick= {this.state.flipPokemon}>flip</button>
                <button onClick= {this.state.delete}>Delete</button>
            </div>
        );
            
    };
};
export default Card;