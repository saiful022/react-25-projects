//single selection
//multiple selection

import React, { useState } from 'react'
import data from './data'
import "./styles.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMulti, setEnableMulti] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(id) {
    setSelected(id === selected ? null : id);
  }

  function handleMultipleSelection(id) {
    let cpyMultiple = [...multiple];
    const indexOfId = cpyMultiple.indexOf(id);

    if(indexOfId === -1){
      cpyMultiple.push(id);
    }
    else{
      cpyMultiple.splice(indexOfId,1);
    }

    setMultiple(cpyMultiple);
  }
  return (
    <div className='wrapper'>
      <button onClick={() => setEnableMulti(!enableMulti)}>Enable Multi Selection</button>
      <div className="accordian">
        {data && data.length > 0 ? (data.map((dataItem) => 
        (
          <div className="item">
            <div onClick={() =>enableMulti ? handleMultipleSelection(dataItem.id) : handleSingleSelection(dataItem.id)} className="title">
              <h3>{dataItem.question}</h3>
              <span>+</span>
            </div>
            {
              enableMulti ? (multiple.includes(dataItem.id)? <div>{dataItem.answer}</div> : null) :(selected === dataItem.id ? <div>{dataItem.answer}</div> : null)
            }
          </div>
        ))) : (<div>No data found !</div>)}
      </div>
    </div>
  )
}

export default Accordian