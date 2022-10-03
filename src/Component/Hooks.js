import React, {useState} from 'react';

function Hooks() {
    const [color, setColor] = useState("red");

    return (
        <>
            <h1>My Favorite Color {color}</h1>
            <button type='button' onClick={() => setColor("blue")}>Blue</button>
            <button type='button' onClick={() => setColor("red")}>Red</button>
            <button type='button' onClick={() => setColor("pink")}>Pink</button>
            <button type='button' onClick={() => setColor("green")}>Green</button>
        </>
    )
}

export default Hooks;