import React from 'react'
import Link from 'next/link'




export default function NavLink( {link} ) {
    return (
        <div className='link-container'>
            <a href={'/categories/' + link.Slug} className='link'>{link.name}</a>
            <style jsx>
                { `
                    .link-container{
                        display: inline-block;
                        margin: 2%;
                        text-align: center;
                        border-radius: 10px;

                        :hover{
                            background-color: var(--main-color);
                        }
                    }
                    .link{
                        color: var(--main-color);
                        text-decoration: none;
                        font-size: 1rem;
                        font-weight: 600;
                        text-align: center;
                        align-items: center;
                        padding: 2%;
                        :hover{
                            color: white;
                            
                        }
                    }
                `}
            </style>
        </div>
    )
}
