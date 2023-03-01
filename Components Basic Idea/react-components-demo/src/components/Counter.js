import { useState } from 'react';

const getTitle = (count) => {
    switch (count) {
        case 1:
            return 'First Blood';
        case 2: 
            return 'Double Kill';
        case 3: 
            return 'Tripple Kill';
        case 4: 
            return 'Multi Kill';
        case 5: 
            return 'Unstoppable';
        default:
            return 'Counter';
    }
};

const Counter = (props) => {
const [counter, setCounter] = useState(0);


const incrementCounter = () => {
    setCounter(oldCounter => oldCounter + 1);
}
const decrementCounter = () => {
    setCounter(oldCounter => oldCounter - 1);
}
const clearCounter = () => {
    setCounter(0);
}


return (
    <div>
    <p style={{fontSize: Math.max(counter, 1) / 2 + 'em'}}>
        {counter > 5 ? 'Godlike' : getTitle(counter)}: {counter}
    </p>

    <button onClick={decrementCounter}>-</button>
    
    {props.canReset && <button onClick={clearCounter}>0</button>}
    
    {counter < 10
        ? <button onClick={incrementCounter}>+</button>
        : null
    }
</div>
);
};

export default Counter;
