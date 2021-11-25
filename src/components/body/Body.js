import {useState} from "react";

const Body = () => {

    const [count, setCount] = useState(0);

    const counter = (isPlus) => {
        isPlus ? setCount(count + 1) : setCount(count - 1)
    }

    return (
        <>
            <div className="d-flex flex-column">
                <button className="mt-1 mb-1" onClick={() => counter(true)}>Плюсани меня</button>
                <button className="mt-1 mb-1" onClick={() => counter(false)}>Минусани меня</button>
            </div>
            <div>{count}</div>
        </>
    )
}

export default Body
