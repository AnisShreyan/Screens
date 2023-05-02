import React from 'react'

function TextCards(props) {
  return (
    <div className='text-cards'>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
    </div>
  )
}

export default TextCards;