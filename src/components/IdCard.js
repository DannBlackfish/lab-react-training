import React from 'react'

export default function IdCard(props) {
    return (
        <div className="idCards">
        <img src={props.picture} />
        <p>{props.lastName}</p>
        <p>{props.fistName}</p>
        <p>{props.gender}</p>
        <p>{props.height}</p>
        <p>{props.birth.toLocaleString()}</p>
        </div>
    )
}
