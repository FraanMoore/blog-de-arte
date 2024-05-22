import React from 'react'

function Canvas(props) {
  return (
    <div>
        <h1>Canvas de la API</h1>
        {props.canvas.map((canva)=> {
            return <div key={canva.id}>
                <h2>{canva.title}</h2>
                <p>{canva.price}</p>
            </div>
        })}
    </div>
  )
}

export default Canvas;