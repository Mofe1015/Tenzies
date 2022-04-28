import React from 'react';
import '../Styling/Dice.css';


function Die(props){
    let tenzies = props.tenzies
    function holdDice(event){
        if(!tenzies){
            let clickedDie = (event.target.id)      
            props.setDice(() => {
                return(
                    props.dice.map(die => {
                        return die.id === clickedDie ? 
                        {...die, isHeld: !die.isHeld} : 
                        die
                    })
                )
            })
        }
            
    }


    const dieStyles = {
        backgroundColor: props.isHeld ? "#59E391" : "white",
        transition: '0.5s'
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
    
    const diceElement = props.dice.map(die => (
        <Die 
            key={die.id} 
            id={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
            dice = {props.dice} 
            setDice = {props.setDice}
            tenzies = {props.tenzies}
        />))

    return(
        <div className='dice-container'>
            {diceElement}
        </div>
    )
}

export default Dice;