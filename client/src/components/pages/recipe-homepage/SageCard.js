import React from 'react'

export default function SageCard(props) {


    return (
        <div style={{maxWidth: '500px'}} onClick={() => props.recipeHandler(props.recipeId)}>
            <img style={{ maxWidth: '500px' }} src={props.image} alt=""/>
            <h1>{props.title}</h1>
        </div>
    )
}
