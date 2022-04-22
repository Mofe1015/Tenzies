import React from 'react';
import '../Styling/Dice.css';


function Die(props){
    return(
        <div>
            <h2>
                {props.value}
            </h2>
        </div>
    )
};

function Dice(){
    return(
        <div className='dice-container'>
            <Die
                value = "1"
            />
            <Die
                value = "2"
            />
            <Die
                value = "3"
            />
            <Die
                value = "4"
            />
            <Die
                value = "5"
            />
            <Die
                value = "6"
            />
            <Die
                value = "7"
            />
            <Die
                value = "8"
            />
            <Die
                value = "9"
            />
            <Die
                value = "10"
            />
        </div>
    )
}

export default Dice;