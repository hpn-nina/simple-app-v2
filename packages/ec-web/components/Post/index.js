import React from 'react'

export default function PostCard({ post }) {
    return (
        <div key = {post._id} className='card'>
            <a href = { `/posts/${post._id}`}>
                <img className='card-img-top' src={post.coverImage} alt={post.title} height='100px' width='auto'/>
                <div className='card-body'>
                    <h5 className='card-title'>{post.title}</h5>
                    <div>Written by: {post.author_name}</div>
                    <div className='card-text'>{post.body.substring(0,50) + '...'}</div>
                    <div className='read-more'>Read more</div>
                </div>

            </a>
            <style jsx>
                {`
                .card{
                    display: block;
                    height: auto;
                    margin: 2%;
                }
                .read-more{
                    display: inline;
                    color: grey;
                    :hover{
                        color: black;

                    }
                }
                `}
            </style>
        </div>
    )
}
