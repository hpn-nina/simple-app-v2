import Head from "next/dist/next-server/lib/head";
import Link from 'next/link';
import { fromImageToURL, API_URL } from "../../utils/urls";
import { fromURLToImage } from '../../utils/format';
import Job from '../../components/JobCard'
import React from 'react'
import Rating from "../../components/Rating";
import ProfileCard from "../../components/ProfileCard";
import { Form, Row, Col, Carousel } from 'react-bootstrap'
import { useState } from 'react';
import { useContext } from "react";
import HeaderContext from "../../context/HeaderContext";
import Router from 'next/router'


const JobDetail = (props) => {
    const {userProfile} = useContext(HeaderContext);
    if(userProfile){
        const user = userProfile[0].user;
    }
    else{
        const user = null;
    }
    
    var AvgRating = 0;
    var numsOfReviews = 0;
    for(var i of props.job.rating){
        AvgRating += i.rating;
        numsOfReviews += 1;
    }
    
    const [option, setOption] = useState('');
    const [note, setNote] = useState('');


    async function buyJobs(){
        if(!user){
            const buyJobInfo = {
                seeker: user._id,
                job: props.job,
                note: note,
                pickedOption: {
                    optionName: '',
                }
            };

        }
        else{
            alert('Bạn phải đăng nhập mới có thể thuê công việc này.');
            Router.push('/login')
        }
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
                    <Carousel>
                        {
                            props.job.coverIamge ? (
                                <Carousel.Item interval={1500}>
                                    <img src = {process.env.API_URL + props.job.coverImage.url}
                                        alt= 'Cover Image'
                                        className = 'd-block w-100'
                                    />
                                </Carousel.Item>
                            ) : ''
                        }
                        {
                            props.job.Image ? (
                                props.job.Image.map(image => (
                                    <Carousel.Item interval={1500}>
                                        <img src={process.env.API_URL + image.url}
                                            alt='Image'
                                            className = 'd-block w-100'
                                        />
                                    </Carousel.Item>
                                ))
                            ) : ''
                        }
                    </Carousel>
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
                            <Form>
                                <Form.Group as={Row} controlId="optionSelect">
                                    <Form.Control placeholder='Lựa chọn' as="select" custom>
                                    {
                                        props.job.option.map(option => (
                                        <option data-subtext={option.desc} value={option}
                                        onChange={e => (setOption(e.value.target))}>{option.optionName}</option>
                                    ))
                                    }
                                    </Form.Control>
                                    <Form.Control as="textarea"r rows={3} placeholder='Ghi chú'>
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                        </div>
                        <div>
                            <button type='button' onClick={() => buyJobs()} className='btn btn-outline-danger'>Thuê công việc</button>
                        </div>
                    </div>
                    <div className='profile'>
                        <ProfileCard profile={props.job.profile}></ProfileCard>
                    </div>
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