import React from 'react';
import '../Styling/Main.css';
import Dice from './Dice';
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'

function Main(){
    const[dice, setDice] = React.useState(allNewDice())
    const[tenzies, setTenzies] = React.useState(false)

    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
        }
    }, [dice]);

    


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

    function newGame(){
        setTenzies(false)
        setDice(allNewDice())
    }

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
    
    const wonText = 'YOU WON!!'
    const instructions = 'Roll until all dice are the same. Click each die to freeze it at its current value between rolls'
    
    return(
        <main className='main'> 
            {tenzies ? <Confetti/> : <></>}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">{tenzies ? wonText : instructions}</p>
            <Dice dice={dice} setDice={setDice} tenzies={tenzies}/>
            <button className='roll-dice' onClick={tenzies ? newGame : rollDice}>{tenzies ? "New Game" : "Roll"}</button>
        </main>
    )
};

export default Main;