import React, { useState } from 'react';

const Clickevent = (popos) => {
    const [power, setPawer] = useState(1);

    const boostPawer = () =>{
        const newPawer = power*2;
        setPawer(newPawer);
    }

    return (
        <div>
            <h2>Click Event: {power}</h2>
            <button onClick={boostPawer}>Click Event</button>
        </div>
    );
};

export default Clickevent;