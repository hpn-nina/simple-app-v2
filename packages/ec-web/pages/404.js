import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Custom404(props) {
    return (
        <div>
            <Image src='/images/banner/we_sorry.jpeg' alt="We're sorry" layout='responsive'></Image>
            <h1 className='center red err'>404 - We can not found this page</h1>
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
                Image{
                    margin: auto;
                }
                `}
            </style>
        </div>
    )
    
}
