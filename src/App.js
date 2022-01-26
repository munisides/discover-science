import React, { useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';      

import fields from './fields';

function App() {
  // const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);
  
  if(!fields) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }

  const { id, area, desc, url } = fields[value];
  return (
    <section className="section">
      <div className="title">
        <h2>Science Fields</h2>
        <div className="underline"></div>
      </div>
      <div className="fields-center">
        {/* btn container */}
        <div className="btn-container">
          {fields.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`field-btn ${index === value && 'active-btn'}`}
              >
                {item.area}
              </button>
            )
          })}
        </div>
        {/* area info */}
        <article key={id} className="field-info">
          {/* <h3>Summary</h3> */}
          <h4> Science: { area }</h4>
          {desc.map((item, index) => {
            return(
              <div key={item.index} className="field-desc">
                <FaAngleDoubleRight className="field-icon"></FaAngleDoubleRight>
                <p>{ desc[index] }</p>
              </div>
            )
          })}
        </article>
      </div>
      <a type="button" className="btn" 
        key={id}
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        Learn More
      </a>
    </section>
  )
}

export default App;
