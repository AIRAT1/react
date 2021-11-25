import {useState} from "react";

const Body = () => {

    const [count, setCount] = useState(0);

    const counter = (isPlus) => {
        isPlus ? setCount(count + 1) : setCount(count - 1)
    }

    return (
        <>
            <button onClick={() => counter(true)}>Плюсани меня</button>
            <button onClick={() => counter(false)}>Минусани меня</button>
            <div>{count}</div>
        </>
    )
}

export default Body
