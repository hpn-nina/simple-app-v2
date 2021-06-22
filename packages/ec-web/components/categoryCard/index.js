import React from 'react'

export default function Card( {props} ) {
    return (
        <div className="card" key={props._id}>
            <img  className="card-img-top" src={'http://localhost:1337' + props.coverImg.url} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.desc.substring(0,50) + '...'}</p>
                <a href={"/categories/" + props._id} className="btn btn-primary">Tìm hiểu thêm</a>
            </div>
            <style jsx>
                {
                    `
                    .card{
                        width: 10rem;
                        .card-title{
                            font-weight: 700;
                        }
                        >*{
                            color: black;
                        }
                        margin-bottom: 30px;
                    }
                    `
                }
            </style>
        </div>
    )
}
