import React from 'react'
import './style.module.css'

export default function Banner({src,name}) {
    return (
        <div>
            <img src={src}></img>
            <p>{name}</p>
        </div>
    )
}
