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
                isHeld: false,
                id: nanoid()
            })
        }
        return newDice
    };

    function rollDice(){
        setDice(() => {
            return(
                dice.map(die => {
                    return die.isHeld ? 
                    die : 
                    {...die, value: Math.ceil(Math.random() * 6)}
                })
            )
        })
    };
    
    return(
        <main className='main'>
            <Dice dice={dice} setDice={setDice}/>
            <button className='roll-dice' onClick={rollDice}>Roll</button>
        </main>
    )
};

export default Main;