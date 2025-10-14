import React from 'react'

const Card = (props) => {
 
  return (
    <div >
        
        <img src={props.value.download_url} alt="images from api" />
        <h2>{props.value.author}</h2>

      </div>
  )
}

export default Card