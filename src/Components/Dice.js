import React from 'react';
import '../Styling/Dice.css';


function Die(props){
    function holdDice(event){
        console.log(event.target.id)
    }
    const dieStyles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return(
        <div onClick={holdDice} className='die' style={dieStyles} id={props.id} >
            <h2>
                {props.value}
            </h2>
        </div>
    )
};

function Dice(props){
    

    const diceElement = props.dice.map(die => <Die key={die.id} id={die.id} value={die.value} isHeld={die.isHeld} />)

    return(
        <div className='dice-container'>
            {diceElement}
        </div>
    )
}

export default Dice;