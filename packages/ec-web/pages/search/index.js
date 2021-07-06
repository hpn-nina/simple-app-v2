import { getSession } from 'next-auth/client'
import React from 'react'
import FilterPlace from '../../components/Filter'
import Head from 'next/head'
import { BigJob } from '../../components/JobCard'
import { SeperatePrice } from '../../utils/format'
import Rating from '../../components/Rating'

export default function Search(props) {
    return (
        <div className='container'>
            <Head>
                <title>Search: {props.keyword}</title>
            </Head>
            <FilterPlace></FilterPlace>
            <div>
            <div className='title'>Từ khóa tìm kiếm: {props.keyword}</div>
            <div className='result-display'>
                
                {
                    props.jobsMeetRequire.map(job => (
                        <div key = {job._id} className = 'card'>
                        <a href = {`/jobs/${job._id}`}>
                        <img className = 'card-img-top' src = {`${process.env.API_URL}${job.coverImage.url}`} alt={job.name}></img>
                        
                        <div className = 'card-body'>
                            <a href = {`/jobs/${job._id}`}>
                                <div className='card-title'>{job.name}</div>
                                <div className='price'>Giá khởi đầu: {SeperatePrice(job.startingPrice)} VND</div>
                            </a>
                            {
                                job.rating.numReviews ? <Rating rating = {job.rating} numReviews ={job.numReviews}></Rating> : <Rating rating = {0} numReviews ={0}></Rating>
                            }
                        </div>
                        </a>
                        
                    </div>
                    ))
                }
            </div>
            </div>

            <style jsx>
                {`
                .container {
                    display: grid;
                    grid-template-columns: .3fr 1fr;
                }
                .result-display{
                    display: grid;
                    grid-template-columns: 1fr 1fr ;
                    grid-template-rows: auto;
                    margin: 5%;
                }
                .card{
                    font-family: 'Raleway', sans-serif;
                    width: 15rem;
                    color: black;
                    > *{
                        color: black;
                    }
                    a{
                        color: black;
                        text-decoration: none;
                    }
                    .price{
                        font-size: 1rem;
                        font-weight: 700;
                    }
                    margin-bottom: 50px;
                }
                `}
            </style>
        </div>
    )
}

export const getServerSideProps = async({req, res, query}) => {
    const session = await getSession({ req });
    var keyword = query.keyword
    //Now we need to get all the jobs for searching keyword in name or desc
    const jobs = await fetch(`${process.env.API_URL}/jobs`);
    const result = await jobs.json();

    keyword = keyword.toLowerCase();

    const jobsMeetRequire = []
    for(var i of result) {
        
        var name = i.name.toLowerCase();
        var desc = i.desc.toLowerCase();
        if(name.includes(keyword)) {
            jobsMeetRequire.push(i);
        }
        else {
            if(desc.includes(keyword)) {
                jobsMeetRequire.push(i);
            }
        }
    }
    return {
        props: {
            session,
            keyword,
            jobsMeetRequire
        }
    }
}