import React from 'react'
import Rating from '../Rating';

export default function Seller(props){
    const { seller } = props;
    return (
        <div key = {seller._id} className = "card">
                            <a href = {`/seller/${seller._id}`}>
                                <img className = "medium" src = {seller.image} alt={seller.name} height="680px" width="830px"/>
                            </a>
                            <div className = "card-body">
                                <a href = {`/seller/${seller._id}`}>
                                    <h2>{seller.name}</h2>
                                </a>
                                <Rating rating = {seller.rating} numReviews = {seller.numReviews}></Rating>
                                <div className = "jobs">Jobs: {seller.numJobs}</div>
                            </div>
        </div>
    )
}