import React, {useState} from 'react';
import styles from './Counter.module.scss';
const Counter = () => {
    const [count,setCount] = useState<number>(0)
    const increment = () => {
        setCount(count+1)
    }
    return (
        <div className={styles.btn}>
            <h1>{count}</h1>
            <button onClick={increment}>
                Button
            </button>
        </div>
    );
};

export default Counter;