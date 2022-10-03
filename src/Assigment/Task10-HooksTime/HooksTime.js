import React, {useState, useEffect} from "react";

function HooksTime() {
    // Variabel date dan setDate untuk menyimpan state
    const [date, setDate] = useState(new Date());

    // Untuk Update Timer
    useEffect(() => {
        var timerId = setInterval( () => tick(), 1000);

        return function cleanup() {
            clearInterval(timerId);
        }
    });
    // function tick yang di panggil untuk menyimpan date baru
    function tick() {
        setDate(new Date());
    }
    
    return (
        <div>
            <h1>Time : {date.toLocaleTimeString()}</h1>
        </div>
    )
}

export default HooksTime;