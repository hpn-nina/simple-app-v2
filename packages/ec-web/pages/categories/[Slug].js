import React from 'react'
import StrapiClient from '../../lib/strapi-client'

const client = new StrapiClient();
export const getStaticProps = async () =>{
    const data = await client.fetchData('/categories/:id')
    return{
        props:{
            details: data
        }
    }
}

export default function index({ details }) {
    return (
        <div key={props._id}>
            
        </div>
    )
}
