import React from 'react'


export default function Banner({src,name}) {
    return (
        <div>
            <img src={src}></img>
            <p>{name}</p>
        </div>
    )
}
