import React from 'react'
import SideNav from '../SideNav'
import { useRouter } from 'next/router'

export default function WholeSideNav(props) {
    const router = useRouter();
    var name = '';
    switch(router.pathname){
        case '/users':
            name = 'index';
            break;
        case '/users/dashboard':
            name = 'dashboard';
            break;
        case '/users/message':
            name = 'message';
            break;
        case '/users/jobs':
            name = 'jobs';
            break;
        default:
            name = '';
            break;
    }
    return (
        <div className='side-nav'>
                <div className='ava-name-card'>
                    <div className='ava-box'>
                        <img className='ava' src={props.user ? `${process.env.API_URL}`+ props.user.profile.avatar.url : `${process.env.API_URL} + '/uploads/Le_Doan_Thien_Nhan_image_37c5c42ab4.jpg'`}  width='50px' height='50px'></img>
                    </div>
                    <div className='name-tag'>
                        { props.user ? props.user.profile.name : "Lâm Thành Tín"}
                    </div>
                </div>
                <div className='nav'> 
                    <SideNav active={name}></SideNav>
                    <div className='logoutbtn'>
                        <button className='btn' type='button'>Đăng xuất</button>
                    </div>
                </div>
            <style jsx>
                {`
                .side-nav{
                            width: 95%;
                            height: 100%;
                            position: relative;
                            
                            background-color: white;
                            border: 1px solid grey;
                            border-radius: 10px;
                            .ava-name-card{
                                display: block;
                                margin: 5% 10%;

                                .name-tag{
                                    font-size: 1.5rem;
                                    font-weight: 400;
                                    display: inline;
                                }
                                img.ava{
                                    display: inline;
                                    border-radius: 50%;
                                    margin: 7% 2%;

                                }
                            }
                            .nav{
                                
                                width: 100%;
                                margin-top: 20%;
                                .logoutbtn{
                                    margin-right: auto;
                                    margin-left: auto;
                                    margin-top: 40%;
                                    margin-bottom: 20%;
                                    button{
                                        padding: 5% 5%;
                                        border-raidus: 10px;
                                        background-color: var(--main-color);
                                        color: white;
                                        font-size: 1rem;
                                        font-weight: 700;
                                    }
                                }
                            }
                        }
                `}
            </style>
        </div>
    )
}
