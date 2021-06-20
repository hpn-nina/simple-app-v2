import React from 'react'
import { useRouter } from 'next/router'
import { fetchAPI } from '../../lib/api';
import StrapiClient from '../../lib/strapi-client';
import Link from 'next/link';



export default function index(props) {
    const router = useRouter();
    const { pid } = router.query;
    const client = new StrapiClient();


    return (
        <div>
            <p>Categories {pid}</p>
        </div>
    )
}
