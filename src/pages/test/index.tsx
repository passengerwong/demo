import React, { useState, memo } from 'react'
const ComA: React.FC<{count: number, onclick: () => void}> = ({onclick, count}) => {
    console.log('ddd11a---')
    return <div>
        this is comA=》》》》{count}
        <button onClick={onclick}>ddd</button>
    </div>
}
const ComB: React.FC<{count: number, onclick: () => void}> = ({onclick, count}) => {
    console.log('dddb---1')
    return <div>
        this is comB------- {count}
        <button onClick={onclick}>click</button>
    </div>
}
const ComC = memo(ComB);
const ComD = memo(ComA);
const Test: React.FC = () => {
    const [countA, setCountA] = useState(0)
    const [countB, setCountB] = useState(1)
    const clickA = () => {
            // console.log('clicka')
            setCountA(s => s + 1)
        }
    const clickB = () => {
        // console.log('clickb')
        setCountB(s => s + 1)
    }
    return (
        <div>
            <h1>this is test page</h1>
            <hr/>
            <ComD count={countA} onclick={clickA} />
            <hr />
            <ComC count={countB} onclick={clickB} />
        </div>
    )
}
export default Test;