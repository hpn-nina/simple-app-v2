import React from 'react'
import { CategoryCard } from '../../components/Category'

c

export default function Categories({ categoryList }) {
    var itemsToRender;

    if(categoryList){
        itemsToRender = categoryList.map((category) => (
            <CategoryCard key={category._id}/>
        ))
    }
    return (
        <div className='categories-page'>
            
        </div>
    )
}
