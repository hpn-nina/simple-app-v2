import React from 'react'
import Link from 'next/link'

export default function Custom404(props) {
    return (
        <div>
            <h1 className='center red err'>404 - Page Not Found</h1>
            <p className='center'><Link href='/'>Please click here to return our Homepage</Link></p>
            <style jsx>
                {`.center{
                    text-align: center;
                }
                .red{
                    color: red
                }
                .err {
                    font-weight: 900;
                    font-family: Raleway;
                }
                p.center{
                    color: pink;
                }
                `}
            </style>
        </div>
    )
    
}
