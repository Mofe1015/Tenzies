import React from 'react';
import '../Styling/Main.css';
import Dice from './Dice';

function Main(){
    const[dice, setDice] = React.useState(allNewDice())

    function allNewDice(){
        const newDice = []
         for (let i = 0; i < 10; i++){
            newDice.push(Math.ceil(Math.random() * 6))
        }
        return newDice
    };

    function rollDice(){
        setDice(allNewDice())
    };
    
    return(
        <main className='main'>
            <Dice dice={dice} />

            <button className='roll-dice' onClick={rollDice}>Roll</button>
        </main>
    )
};

export default Main;