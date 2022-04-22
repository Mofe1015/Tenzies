import React from 'react';
import '../Styling/Main.css';
import Die from './Die';

function Main(){
    return(
        <div className='main'>
            <Die
                value = '1'
            />
        </div>
    )
};

export default Main;