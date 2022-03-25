import React from 'react';

const Country = (propos) => {
    return (
        <div>
            <h3>Name: {propos.name}</h3>
            <p>Population: {propos.population}</p>
        </div>
    );
};

export default Country;