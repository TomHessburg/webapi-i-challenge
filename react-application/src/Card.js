import React, { useState } from 'react'
import axios from 'axios';

const Card = props => {

   

    return(
        <div className="card">
            <h2>{props.char.name}</h2>
            <p>{props.char.bio}</p>
            <button 
            onClick={() => props.updateList(props.char.id)}
            >delete</button>
        </div>
    )
}

export default Card