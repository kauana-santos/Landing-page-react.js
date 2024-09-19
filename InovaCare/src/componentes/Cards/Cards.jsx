import React from 'react'
import "./Cards.css"

const Cards = ({icone, descricao}) => {
  return (
    <div className='card'>
      <div><img src={icone} alt="icone" /></div>
      <div>
        <p>{descricao}</p>
      </div>
    </div>
  )
}

export default Cards