import React from 'react'

import './style.module.css'

export default function CategoryPage(props) {
    const { category } = props;
    
    return (
        <div key={category._id} className='category-pg-container'>
            <div className='banner-img'>
                <img src={category.coverImg}></img>
                <div className='banner-text'>{category.name}</div>
            </div>
            <div className='category-desc'>{category.desc}</div>
            <div className='category-body'>

            </div>

        </div>

    )
}

export const CategoryCard = (props) => {
    const {category} = props;
    return (
        <div key={category._id} className='card'>
            <a>
                <img src={category.coverImg} className='card-img-top' alt={category.name}/>
                <div className='card-body'>
                    <h2>{category.name}</h2>
                </div>
            </a>
        </div>
    )
}