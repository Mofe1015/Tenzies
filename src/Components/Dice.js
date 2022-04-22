import React from 'react';
import '../Styling/Die.css';


function Die(props){
    return(
        <div>
            {props.value}
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
        </div>
    )
}

export default Dice;