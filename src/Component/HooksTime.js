import React, {useState, useEffect} from "react";

function HooksTime(props) {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        var timerId = setInterval( () => tick(), 1000);

        return function cleanup() {
            clearInterval(timerId);
        }
    });

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