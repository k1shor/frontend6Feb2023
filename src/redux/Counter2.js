import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter2 = () => {
  const [gameName, setGamename] = useState('')
  const [playerName, setPlayername] = useState('')

  // const counterStore = useSelector(store=>store)
  // const count = counterStore.count
  // const data = counterStore.data

  // const count = useSelector(store=>store.count)
  // const data = useSelector(store=>store.data)

  // getting value by object destructuring
  const {count,data} = useSelector(store=>store.counter)

  const { game, player } = useSelector(store => store.game)

  const dispatch = useDispatch()
  const reset = () => {
    dispatch({ type: "RESET_COUNT" })
  }

  return (
    <>
      <h1 className='display-1 text-center'>Count: {count}</h1>
        <button className='btn btn-primary' onClick={()=>{
          return dispatch({type: "INCREASE_COUNT"})
        }}>Increase Count</button>
        <button className='btn btn-secondary' onClick={()=>{
          return dispatch({type: "DECREASE_COUNT"})
        }}>Decrease Count</button>
        <button className='btn btn-secondary' onClick={reset}
        >Reset Count</button>

        <br/>
        <h1 className='display-1 text-center'>Data: {data}</h1>
        <button className='btn btn-primary' 
        onClick={()=>{
          return dispatch({type: "INCREASE_DATA"})
        }}>Increase Data</button>

        <button className='btn btn-secondary' 
        onClick={()=>{
          return dispatch({type: "DECREASE_DATA"})
        }}>Decrease Data</button>
        
        <button className='btn btn-secondary' 
        onClick={()=>dispatch("RESET_DATA")}
        >Reset Data</button>

      <h1 className='display-1 text-center'>Game: {game}</h1>
      <input type='text' placeholder='enter game name here' className='form-control'
        onChange={(e) => { setGamename(e.target.value) }} />
      <button className='btn btn-warning' onClick={() => dispatch({
        type: "UPDATE_GAME",
        payload: gameName
      })}>Update Game</button>

      <h1 className='display-1 text-center'>
        Player: {player}
      </h1>
      <input type='text'
        placeholder='enter player name here'
        className='form-control'
        onChange={(e) => { setPlayername(e.target.value) }} />

      <button className='btn btn-warning'
        onClick={() =>
          dispatch({
            type: "UPDATE_PLAYER",
            payload: playerName
          })}>Update Player</button>


    </>
  )
}

export default Counter2