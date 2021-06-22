import React from 'react'
import jobs from '../jobs.json'
import Head from 'next/head';
const job = jobs[0];

export default function Job(props) {
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
