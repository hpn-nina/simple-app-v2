import Head from "next/dist/next-server/lib/head";
import Link from 'next/link';
import { fromImageToURL, API_URL } from "../../utils/urls";
import { fromURLToImage } from '../../utils/format';
import Job from '../../components/JobCard'

const Category = (props) => {
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
                {props.job.name}
                {props.profile.name}
            </div>
            <div>
                
            </div>
                <style jsx>
                    {`
                    
                    `}
                </style>
        </div>
    )
}

export async function getStaticProps({ params: { id } }) {
     const job_res = await fetch(`${API_URL}/jobs/?id=${id}`);
     const found = await job_res.json();

     const profile_res = await fetch (`${API_URL}/profiles/?id=${found[0].profile.id}`);
     const profile_found = await profile_res.json();

     return {
         props: {
            job: found[0],
            profile: profile_found[0]
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

export default Job;