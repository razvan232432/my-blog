import React from 'react'

const Cards = (props) => {
  return (
    <div className="card">
        <img src={props.img} alt='err' className='card-image'/>
        <div>
           <a href={props.link}><h2 className='card-title'>{props.title}</h2></a>
        </div>
    </div>
  )
}

export default Cards