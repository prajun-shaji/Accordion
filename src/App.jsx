import React, { useState } from 'react'
import { data } from './Data'
import './App.css'

export default function App() {

  const [selected, setSelected] = useState(null)

  function handleClick(index) {
    if(selected == index) {
       return setSelected(null)
    }
    return setSelected(index)
  }

  return (
    <div className='wrapper'>
      <div className='accordion' style={{width:"500px"}}>
        {data.map((dataItem, index) => 
          (<div className='items'>
            <div className='title' onClick={() => handleClick(index)}>
              <h2>{dataItem.question}</h2>
              <span>{selected == index ? "-" : "+"}</span>
            </div>
            <div className={selected == index ? "content show" : "content"}>{dataItem.answer}</div>
          </div>)
        )}
      </div>
    </div>
  )
}

