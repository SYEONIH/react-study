import React, { useEffect, useState } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accomodate(){
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect(()=>{
        console.log("useEffect() is called!");
        console.log(`is Full : ${isFull}`);
    });

    useEffect(()=>{
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count ${count}`);
        },[count]);

    return (
        <div>
            <p>{`총 ${count}명 수용`}</p>
            <button onClick={increaseCount} disabled={isFull}>입장</button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p className="text-red-300"> 가득 찼습니다</p>}
        </div>
    )    
}

export default Accomodate;
