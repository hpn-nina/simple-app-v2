import React from 'react';
import Rating from '../Rating';
import { API_URL } from '../../utils/urls';
import { SeperatePrice } from '../../utils/format';

export default function Job(props) {
    const { job } = props;
    return (
        <div key = {job._id} className = 'card'>
            <a href = {`/jobs/${job._id}`}>
            <img className = 'card-img-top' src = {`${API_URL}${job.coverImage.url}`} alt={job.name}></img>
            
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
            <style jsx>
                {`
                .card{
                    font-family: 'Raleway', sans-serif;
                    width: 10rem;
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
