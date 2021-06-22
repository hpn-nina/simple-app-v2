import Head from "next/dist/next-server/lib/head";
import Link from 'next/link';
import { fromImageToURL, API_URL } from "../../utils/urls";
import { fromURLToImage } from '../../utils/format';
import Job from '../../components/JobCard'

const Category = ({ category }) => {
    return (
        <div className='content-container'>
            <Head>
                {
                    category.meta_title &&
                        <title>{category.meta_title}</title>
                }
                {
                    category.meta_desc &&
                        <meta name='desc' content={category.meta_desc}></meta>
                }
            </Head>
            <div className='banner-container' >
                <div className='title'>{category.name}</div>
                <img className='banner' src={`${API_URL}${category.coverImg.url}`}/>
            </div>
            <div>
                
            </div>
                <style jsx>
                    {`
                    .container{
                        width: 100%;
                    }
                    .banner-container{
                        width: 100%;
                        position: relative;
                        .title{
                            position: absolute;
                            right: 40%;
                            left: 40%;
                            bottom: 30%;
                            top: 30%;
                            color: black;
                            font-size: 2rem;
                            font-weight: 900;
                            font-family: 'Montserrat', 'Raleway', sans-serif;
                            opacity: 100%;
                        }
                        margin-bottom: 10%;
                    }
                    .banner{
                        width: 100%;
                        height: 150px;
                        opacity: 60%;
                    }
                    `}
                </style>
        </div>
    )
}

export async function getStaticProps({ params: { Slug } }) {
     const category_res = await fetch(`${API_URL}/categories/?Slug=${Slug}`);
     const found = await category_res.json();
     return {
         props: {
            category: found[0]
         }
     }

    }



export async function getStaticPaths() {
    //Retrive all the possible paths
    const categories_res = await fetch(`${API_URL}/categories`);
    const categories = await categories_res.json();

    const paths = categories.map(category => {
        return {
            params: {
                Slug: String(category.Slug)
            }
        }
    })
    
    //Return them to NextJS context
    return {
        paths,
        fallback: false
    }
}

export default Category;