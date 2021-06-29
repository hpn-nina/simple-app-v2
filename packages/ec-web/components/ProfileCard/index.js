import React from 'react'
import Link from 'next/link'

export default function ProfileCard(props) {
    const { profile } = props;
    const { API_URL } = process.env;
    return (
        <div className='card-container'>
            <div className='block'>
                <div className='inline'><img className='card-image' src={API_URL + profile.avatar.url} width='10%'></img></div>
                <div className='name'>{profile.name}</div>
            </div>
            <div className='block skill'>
                Skill: {profile.skills ? profile.skills: ''}
            </div>
            <div className='block message'>
                <Link href='/users/message'><a >Nhắn tin với tôi ngay</a></Link>
            </div>
            <style jsx>
                {`
                .card-container{
                    width: 80%;
                    background-color: white;
                    border: 1px solid black;
                    border-radius: 10px;
                    font-size: 1rem;
                    font-weight: 600;
                    padding: 2%;
                    .card-image{
                        border-radius: 50%;
                    }
                    .inline{
                        display: inline;
                        margin: 5%;
                    }
                    .name{
                        display: inline;
                        margin-right: 5%;
                    }
                    .block{
                        display: block;
                        margin-bottom: 2%;
                    }
                    .block.skill{
                        margin-left: 5%;
                        margin-right: 5%;
                    }
                    .block.message{
                        margin-left: 5%;
                        margin-right: 5%;
                        a{
                            color: var(--main-color);
                        }
                    }
                }
                `}
            </style>
        </div>
    )
}
