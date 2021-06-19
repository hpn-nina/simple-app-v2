import Image from 'next/image';
import React from 'react'
import PostCard from '../../components/Post/index'
import StrapiClient from '../../lib/strapi-client';


const client = new StrapiClient();

const Posts = ({ postList }) => {

    return (
        <div className='post-page'>
            <div className='page-banner'>
                <Image
                    src = '/banner/posts.jpg'
                    alt = 'true'
                    layout = "responsive"
                    width={8}
                    height={2.5}
                />
                <h1 className='center'>Blog Posts Area</h1>
            </div>
            <div className = 'post-container'>
                {
                    postList.map((post) => {
                    return (
                        <PostCard key={post._id} post={post} className='one-card' />
                    )
                })
                }
            </div>
            <style jsx>
                {`
                .page-banner{
                    margin: 20px 0px;
                    position: relative;
                    width: 100%;
                    height: auto;
                    Image{
                        position: absolute;
                    }
                    h1{
                        position: absolute;
                        bottom: 0px;
                        right: 35%;
                        left: 30%;
                        color: green;
                    }
                }
                h1.center{
                    font-family: Verdana, san-serif;
                    font-weight: 900;
                }
                .post-container{
                    display: grid;
                    width: 100%;
                    height: auto;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-template-rows: auto;
                    justify-content: center;
                    margin: 2%;
                }
                .one-card{
                    padding: 5%;
                }
                `}
            </style>
        </div>
    )
}
export const getStaticProps = async () => {
    const allPosts = await client.fetchData('/posts');
    return {
        props: {
            postList: allPosts
        }
    }
}

export default Posts;