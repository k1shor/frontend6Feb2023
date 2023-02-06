import React, { useEffect, useState } from 'react'

const Counter = () => {
    /* 
    let [name, function] = useState(initial value)

    name -> state variable
    function -> function to update state variable, setName
    initial value -> 
            0-9 -> number
            ' ' -> string
            [ ] -> array
            { } -> object

    useEffect(function, dependencies)
        function -> effect to be seen
        dependencies -> [statevariable1, statevariable2] - effect is seen on load and when statevariable1 or                                                 statevariable2 changes
                        [] -> effect is seen on load only
                        null -> effect is seen on load and when any state variable changes state

    */

    let [count, setCount] = useState(0)
    let [data, setData] = useState(1000)

    useEffect(()=>{
        window.alert('value updated')
    },[count])

    const increase_count = () => {
        setCount(++count)
        console.log(count)
    }
    const decrease_count = () => {
        setCount(--count)
    }
    const reset_count = () => {
        setCount(0)
    }

    return (
        <>
            <div className='text-center'>
                <div className='display-1 text-center'>Counter:{count}</div>
                <button className='btn btn-info' onClick={increase_count}>Increase Count</button>
                <button className='btn btn-success' onClick={decrease_count}>Decrease Count</button>
                <button className='btn btn-primary' onClick={reset_count}>Reset Count</button>

                <div className='display-1 text-center'>Data:{data}</div>
                {
                    data < 2000 &&
                    <button className='btn btn-info' onClick={() => { setData(data + 100) }}>INcrease Data</button>
                }
                {
                    data > 0 &&
                    <button className='btn btn-danger' onClick={() => { setData(data - 100) }}>Decrease Data</button>
                }

                <button className='btn btn-warning' onClick={() => { setData(1000) }}>Reset Data</button>

            </div>
        </>
    )
}

export default Counter