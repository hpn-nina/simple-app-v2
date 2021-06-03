import React from 'react';
import Rating from '../Rating';


export default function Job(props) {
    const { job } = props;
    return (
        <div key = {job.job_id} className = 'card'>
            <a href = {`/job/${job.job_id}`}>
                <img className = 'medium' src = {job.image} alt={job.job_name} height="680px" width="830px"></img>
            </a>
            <div className = 'card-body'>
                <a href = {`/job/${job.job_id}`}>
                    <h2>{job.job_name}</h2>
                </a>
                <Rating rating = {job.rating} numReviews ={job.numReviews}></Rating>
            </div>
        </div>
    )
}
