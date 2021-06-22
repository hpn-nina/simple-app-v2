import React from 'react'
import jobs from '../jobs.json'
import Head from 'next/head';
import { API_URL } from '../../utils/urls';
const job = jobs[0];

export async function getStaticProps({params : { _id }}){
    const jobs_res = await fetch(`${API_URL}/jobs/?id=${_id}`);
    const found = await jobs_res.json()

    return {
        props:{
            jobs: found[0]
        }
    }
}

export async function getStaticPaths() {
    //Retrive all possible paths
    const jobs_res = await fetch(`${API_URL}/jobs/`);
    const jobs = await jobs_res.json();

    //Return them to NEXTJS context
    return{
        paths: jobs.map(job => ({
            params: { id: String(job._id) }
        })),
        fallback: false //SHow 404 page if the param does not match
    }
}

export default function Job({jobs}) {
    return (
        <div className='container'>
            <Head>
                {
                    jobs.meta_title &&
                        <title>{jobs.meta_title}</title>
                }
                {
                    jobs.meta_desc && 
                        <title>{jobs.meta_desc}</title>
                }
            </Head>
            <div className='part-1'>
                <div>{jobs.name}</div>
                <div className='job-details'>
                    <h1 className='job-title'>Mô tả công việc</h1>
                    <div className='job'>
                        <div className='cover-name'>
                            
                        </div>
                        <div className='desc'>

                        </div>
                    </div>
                </div>
                <div></div>
            </div>
            <div className='part-2'>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <style jsx>
                {
                    `
                    .container{
                        width: 100%;
                        .part-1{
                            width: 100%;
                            display: grid;
                            grid-template-columns: .1fr 1fr .1fr;
                        }
                        .part-2{
                            width: 100%;
                            display: grid;
                            grid-template-columns: .1fr 1fr .1fr;
                        }
                    }
                    `
                }
            </style>
        </div>
    )
}
