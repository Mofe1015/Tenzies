import React from 'react';
import '../Styling/Main.css';
import Dice from './Dice';
import {nanoid} from 'nanoid'


function Main(){
    const[dice, setDice] = React.useState(allNewDice())

    function allNewDice(){
        const newDice = []
         for (let i = 0; i < 10; i++){
            newDice.push({
                value: Math.ceil(Math.random() * 6),
                isHeld: true,
                id: nanoid()
            })
        }
        return newDice
    };

    function rollDice(){
        setDice(allNewDice())
    };
    
    return(
        <main className='main'>
            <Dice dice={dice}/>

            <button className='roll-dice' onClick={rollDice}>Roll</button>
        </main>
    )
};

export default Main;