import React from 'react';
import '../Styling/Dice.css';


function Die(props){
    return(
        <div className='die'>
            <h2>
                {props.value}
            </h2>
        </div>
    )
};

function Dice(props){
    
    const diceElement = props.dice.map(die => <Die value={die} />)

    return(
        <div className='dice-container'>
            {diceElement}
        </div>
    )
}

export default Dice;