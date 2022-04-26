import React from 'react';
import '../Styling/Dice.css';


function Die(props){
    const dieStyles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return(
        <div className='die' style={dieStyles}>
            <h2>
                {props.value}
            </h2>
        </div>
    )
};

function Dice(props){
    

    const diceElement = props.dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld} />)

    return(
        <div className='dice-container'>
            {diceElement}
        </div>
    )
}

export default Dice;