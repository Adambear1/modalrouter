import React from 'react'

function Body({image, title, description}) {
    return (
        <>
            <img className="card-img-top" src={image} alt="Card image cap" />
      <div className="card-body">
        <h1 className="card-title">{title}</h1>
        <p className="card-text description">{description}</p>
       
      </div>
      <div className="fadeEffect"></div>
        </>
    )
}

export default Body
