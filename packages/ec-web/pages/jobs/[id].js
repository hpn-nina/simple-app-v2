import Head from "next/dist/next-server/lib/head";
import Link from 'next/link';
import { fromImageToURL, API_URL } from "../../utils/urls";
import { fromURLToImage } from '../../utils/format';
import Job from '../../components/JobCard'
import React from 'react'
import Rating from "../../components/Rating";
import ProfileCard from "../../components/ProfileCard";


const JobDetail = (props) => {
    var AvgRating = 0;
    var numsOfReviews = 0;
    for(var i of props.job.rating){
        AvgRating += i.rating;
        numsOfReviews += 1;
    }
    return (
        <div className='content-container'>
            <Head>
                {
                    props.job.meta_title &&
                        <title>{props.job.meta_title}</title>
                }
                {
                    props.job.meta_desc &&
                        <meta name='desc' content={props.job.meta_desc}></meta>
                }
            </Head>
            <div className='banner-container' >
            
            </div>
            <div className='container'>
                <div className='img-desc'>
                    <div id='carouselControls' className='carousel slide' data-ride="carousel">
                        <div className='carousel-inner'>
                            <div className='carousel-item active'>
                                <img className='d-block w-100' src={API_URL + props.job.coverImage.url}></img>
                            </div>
                            {
                                props.job.Image ? (
                                    props.job.Image.map(image => 
                                        (<div className='carousel-item'>
                                            <img src={API_URL + image.url}></img>
                                        </div>)
                                    )
                                ) : <div className=''></div>
                            }
                        </div>
                        <a className='carousel-control-prev' href='#carouselControls' role='button' data-slide='prev'>
                            <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                            <span className='sr-only'>Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    <div className='desc'>
                        <div className='title'>
                            {props.job.name}
                        </div>
                        <div className='desc-details'>
                            {props.job.desc}
                        </div>
                        <div className='time'>
                            Thời gian cần để hoàn thành: <div className='bold'>{props.job.timeFinish + ' '+ props.job.timeFinishUnit}</div>
                        </div>
                        <div className='rating'>
                            <Rating rating={AvgRating} numReviews={numsOfReviews}></Rating>
                        </div>
                        <div>
                            <select className='selectpicker'>
                                {
                                    props.job.option.map(option => (
                                        <option aria-live={option.desc}>{option.optionName}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <div className='profile'>
                    <ProfileCard profile={props.job.profile}></ProfileCard>
                </div>
            </div>
                <style jsx>
                    {`
                    .title{
                        font-size: 2rem;
                        font-weight: 700;
                    }
                    .img-desc{
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        grid-template-rows: auto;
                        .desc{
                            width: 90%;
                            margin: auto;
                            div{
                                margin-top: 5%;
                            }
                        }
                    }
                    .profile{
                        margin-top: 10%;
                        width: 100%;
                    }
                    `}
                </style>
        </div>
    )
}

export async function getStaticProps({ params: { id } }) {
     const job_res = await fetch(`${API_URL}/jobs/?id=${id}`);
     const found = await job_res.json();

     return {
        props: {
           job: found[0],
        }
    }
     

    }



export async function getStaticPaths() {
    //Retrive all the possible paths
    const jobs_res = await fetch(`${API_URL}/jobs`);
    const jobs = await jobs_res.json();

    const paths = jobs.map(job => {
        return {
            params: {
                id: String(job._id)
            }
        }
    })
    
    //Return them to NextJS context
    return {
        paths,
        fallback: false
    }
}

export default JobDetail;