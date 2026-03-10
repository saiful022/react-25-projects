//single selection
//multiple selection

import React, { useState } from 'react'
import data from './data'
import "./styles.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(id) {
    setSelected(id === selected ? null : id);
  }
  return (
    <div className='wrapper'>
      <div className="accordian">
        {data && data.length > 0 ? (data.map((dataItem) => 
        (
          <div className="item">
            <div onClick={() => handleSingleSelection(dataItem.id)} className="title">
              <h3>{dataItem.question}</h3>
              <span>+</span>
            </div>
            {
              selected === dataItem.id ? <div>{dataItem.answer}</div> : null
            }
          </div>
        ))) : (<div>No data found !</div>)}
      </div>
    </div>
  )
}

export default Accordian