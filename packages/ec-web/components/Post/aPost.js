import React from 'react'

export default function aPost( {post} ) {
    return (
        <div key={post._id} className='post-container'>
            <Image
                src={post.coverImg}
                width={1}
                height={1}
                layout='responsive'
            />
            
            
        </div>
    )
}
