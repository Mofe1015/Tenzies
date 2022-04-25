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

function Dice(){
    const[dice, setDice] = React.useState(allNewDice())

    function allNewDice(){
        const newDice = []
         for (let i = 0; i < 10; i++){
            newDice.push(Math.ceil(Math.random() * 6))
        }
        return newDice
    }

    const diceElement = dice.map(die => <Die value={die} />)

    return(
        <div className='dice-container'>
            {diceElement}
        </div>
    )
}

export default Dice;