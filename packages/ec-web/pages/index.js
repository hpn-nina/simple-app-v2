import StrapiClient from '../lib/strapi-client';
import Card from '../components/categoryCard';
import Head from 'next/head';
import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Controller } from 'swiper';
import FreelancerCard from '../components/FreelancerCard';
import { API_URL } from '../utils/urls'
import JobCard from '../components/JobCard/index.js';
//import Posts from './posts'

const client = new StrapiClient()
export const getStaticProps = async () => {
    const lists = await client.fetchData('/navigation');
    const results_res = await fetch(`${API_URL}/profiles/`);
    const results = await results_res.json();
    const jobs_res = await fetch(`${API_URL}/jobs/`);
    const jobs = await jobs_res.json();
    
    return {
        props: {
            profiles: results,
            data: lists,
            jobs: jobs,
        }
    }
}
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Controller]);


export default function Home(props) {
    const [controlledSwiper, setControlledSwiper] = useState(null);
    var profiles = {"profiles": []};
    for( var i of props.profiles){
        profiles.profiles.push(i);
    }
    var jobs = {"jobs": []};
    for( var i of props.jobs){
        jobs.jobs.push(i);
    }
    useEffect(() => {
        
          
    });
    const [keyword, setKeyword] = useState('');

    async function search(){

    }
    return (
        <div className="container">
        
        <section className="u-clearfix u-custom-color-1 u-section-1" id="sec-9709" >

            <div className='title'>Chúng tôi cung cấp những tài năng bậc nhất. Tìm kiếm ngay!</div>
            <form className="input-group">
              <input type="text" className="form-control rounded" placeholder="logo design" aria-label="logo design"
                aria-describedby="search-addon" onChange={e => setKeyword(e.target.value)} value={keyword}/>
              <button type="button" className="btn btn-outline-danger" onClick={() => search()}>Tìm kiếm</button>
            </form>
      </section>
      <section
        className="u-clearfix u-custom-color-6 u-section-2"
        id="sec-b0f3"
      >
        <div className='title'>Những phân loại được yêu thích</div>
        <Swiper
            spaceBetween={30}
            slidesPerView={4} spaceBetween={30} pagination={{
            "clickable": true}} 
            className='mySwipper'
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => <div></div>}
            onSwiper={(swiper) => <div></div>}
        >
            {
                (props.data.categories).map(card => (
                    <SwiperSlide><Card key={card.Slug} props={card} className='one-card'/></SwiperSlide>
                ))
            }
            
        </Swiper>
      </section>

    <section
        className="u-clearfix u-custom-color-8 u-section-3"
        id="sec-3036"
      >
        <div className='title'>Những freelancer được yêu thích</div>

        <Swiper
            spaceBetween={30}
            slidesPerView={4} spaceBetween={30} pagination={{
            "clickable": true}} 
            className='mySwipper'
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => <div></div>}
            onSwiper={(swiper) => <div></div>}
        >
            {
                profiles.profiles.map(card => (<SwiperSlide><FreelancerCard key={card._id} card={card} ></FreelancerCard></SwiperSlide>))
            }
            
        </Swiper>
    </section>
    <section
        className="u-clearfix u-custom-color-11 u-section-4"
        id='sec-3038'
      >
        <div className='title'>Những công việc được yêu thích</div>

        <Swiper
            spaceBetween={30}
            slidesPerView={4} spaceBetween={30} pagination={{
            "clickable": true}} 
            className='mySwipper'
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => <div></div>}
            onSwiper={(swiper) => <div></div>}
        >
            {
                jobs.jobs.map(card =><SwiperSlide><JobCard key={jobs._id} job={card} className='one-card'></JobCard></SwiperSlide>)
            }
            
        </Swiper>
      </section>
        
    <style jsx>
        {`
        

            .title{
                text-align: center;
                font-size: 3.5rem;
                font-weight: 700;
                margin: 25px;
                display: block;
                padding: 10px;
                font-family: 'Montserrat';
                }
            #sec-9709{
                
                padding: 20px;
                padding-bottom: 5%;
                .input-group{
                width: 90%;
                margin-left: auto;
                margin-right: 7%;
                .form-control.rounded{
                    align-items: center;
                }
                .title{
                    font-weight: 900;
                }
                }
            }
            #sec-3036, #sec-3038, #sec-b0f3{
                padding: 5%;
            }
            
            
        `}
    </style>
    </div>
    )
  }
