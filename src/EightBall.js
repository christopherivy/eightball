import React, { useState } from 'react';
import './EightBall.css';
import answers from './answers';


// this fn is for the random chioce by random index in the array
const choice = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[ randomIndex ];
};


const EightBall = (props) => {
    const [ msg, setMsg ] = useState("Think of a question.");
    const [ color, setColor ] = useState('black');

    // click event
    const handleClick = () => {
        const { msg, color } = choice(props.answers);
        setMsg(msg);
        setColor(color);
    };

    return (
        <div className="EightBall" onClick={ handleClick } style={ { backgroundColor: color } }>
            <div >
                <b className="EightBall"> { msg } </b>
            </div>
        </div>
    );
};

EightBall.defaultProps = {
    answers: [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" }
    ]
};



export default EightBall;