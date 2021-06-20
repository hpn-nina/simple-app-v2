import StrapiClient from '../lib/strapi-client';
import Card from '../components/categoryCard';
import Head from 'next/head';
import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Controller } from 'swiper';
import FreelancerCard from '../components/FreelancerCard';
import profileData from './profileData'

//import Posts from './posts'

const client = new StrapiClient()
export const getStaticProps = async () => {
    const lists = await client.fetchData('/navigation');
    const results = await client.fetchData('/profiles');
    
    return {
        props: {
            pofiles: results,
            data: lists,
            
        }
    }
}
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Controller]);


export default function Home(props) {
    const [controlledSwiper, setControlledSwiper] = useState(null);
    var newData = new Object;
    newData["data"] = props.profiles;
    console.log(newData);
    useEffect(() => {
        
          
    });
    const [keyword, setKeyword] = useState('');

    async function search(){

    }
    return (
        <div className="container">
        
        <section className="u-clearfix u-custom-color-1 u-section-1" id="sec-9709" >

            <div className='title'>Cần tìm người? Hãy đến với chúng tôi</div>
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
            spaceBetween={50}
            slidesPerView={3} centeredSlides={true} spaceBetween={30} pagination={{
            "clickable": true}} 
            className='mySwipper'
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                (props.data.categories).map(card => (
                    <SwiperSlide><Card key={card._id} props={card} className='one-card'/></SwiperSlide>
                ))
            }
        </Swiper>
      </section>

    <section
        className="u-clearfix u-custom-color-8 u-section-3"
        id="sec-3036"
      >
        <div className='title'>BEST FREELANCER</div>

        <Swiper
            spaceBetween={50}
            slidesPerView={3} centeredSlides={true} spaceBetween={30} pagination={{
            "clickable": true}} 
            className='mySwipper'
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                profileData.profiles.map(card => (<SwiperSlide><FreelancerCard key={card._id} card={card} ></FreelancerCard></SwiperSlide>))
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
                }
            #sec-9709{
                font-family: Georgia, sans-serif;
                padding: 20px;
                padding-bottom: 5%;
                .input-group{
                width: 90%;
                margin-left: auto;
                margin-right: 7%;
                .form-control.rounded{
                    align-items: center;
                }
                }
            }
            #sec-3036{
                padding: 5%;
            }
            #sec-b0f3{
                padding: 5%;
            }
            section > .container{
                display: grid;
                min-height: 0;
                min-width: 0;
                width: 100%;
                grid-template-columns: 1fr 1fr 1fr;
                margin-left: 4%;
                margin-right: 5%;
                .one-card{
                    margin-bottom: 10px;
                    min-width: 0;
                    overflow: hidden;
                }
            }
        `}
    </style>
    </div>
    )
  }
