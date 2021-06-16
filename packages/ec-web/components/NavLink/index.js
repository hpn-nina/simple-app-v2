import React from 'react'
import Link from 'next/link'




export default function NavLink( {items} ) {
    return (
        <div className='link-container'>
            <a href={'/categories/' + items._id} className='link'>{items.name}</a>
            <style jsx>
                { `
                    .link-container{
                        display: block;
                        background-color: var(--main-color);
                        opacity: 50%;
                        text-align: center;

                        :hover{
                            opacity: 0%;
                        }
                    }
                    .link{
                        color: white;
                        padding: 5px;
                        :hover{
                            color: grey;
                            opacity: 30%;
                            padding: 8px;
                            transition-delay: .2s;
                        }
                    }
                `}
            </style>
        </div>
    )
}
