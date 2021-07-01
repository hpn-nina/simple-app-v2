import React from 'react'
import SideNav from '../../components/SideNav';
import Link from 'next/link';
import WholeSideNav from '../../components/WholeSideNav';
import getConfig from 'next/config'
import { parseCookies } from 'nookies';


export default function UserProfile(props) {
    return (
        <div className='body-container'>
            <div className='content-container'>
            <div></div>
            <WholeSideNav user={props.user}></WholeSideNav>
            <div className='main-body'>
                <div className='profile'>
                    <form className='form'>
                    <div className='profile-title'>Thông tin cá nhân</div>
                        <div className='form-group'>
                            <label htmlFor='name'>Họ và tên</label>
                            <input className='form-control' type='text' placeholder='Lâm Thành Tín' defaultValue={props.user ? props.user.profile.name : 'Lâm Thành Tín'}></input>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='phone'>Số điện thoại</label>
                            <input className='form-control' type='text' placeholder='0363638292' defaultValue={props.user ? props.user.profile.phone : '0352024820'}></input>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='birthday'>Ngày sinh</label>
                            <input className='form-control' type='date'></input>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='sex'>Giới tính</label>
                            <select className='form-control' id='sex' defaultValue={props.user.profile.sex ? props.user.profile.sex : 'Male'}>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='occupations'>Công việc</label>
                            <input type='text' className='form-control' id='occupations' defaultValue={props.user.profile.occupations ? props.user.profile.occupations : '' }></input>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='certificates'>Bằng cấp</label>
                            <textarea className='form-control' id='certificates' defaultValue={props.user.profile.certificates ? props.user.profile.certificates : ''}></textarea>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='skills'>Kỹ năng</label>
                            <textarea className='form-control' id='skills' defaultValue={props.user.profile.skills ? props.user.profile.skills : ''}></textarea>
                        </div>
                        
                        <div className='form-group'>
                            <label htmlFor='interests'>Sở thích</label>
                            <textarea className='form-control' id='interests' defaultValue={props.user.profile.interests ? props.user.profile.interests : ''}></textarea>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='interests'>Giới thiệu</label>
                            <textarea className='form-control' id='desc' defaultValue={props.user.profile.desc ? props.user.profile.desc : ''}></textarea>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='avatar'>Ảnh đại diện</label>
                            <input className='form-control-file' type='file' id='avatar'></input>
                        </div>
                        <div className='form-group'>
                            <button className='btn btn-outline-danger' type='button'>Lưu</button>
                        </div>
                    </form>
                    <div className='profile-details'>
                        <div className='bold'>Tên tài khoản:</div> { 
                            props.user ? props.user.username : 'lamthanhtin'
                        }
                        <br></br>
                        <div className='bold'>Email: </div>{props.user ? props.user.email : '19521400@gm.uit.edu.vn'}
                    </div>
                </div>
                <div className='change-pass-form'>
                    <div className='pass-title'>Đổi mật khẩu</div>
                    <div className='form-group'>
                        <label>Nhập lại mật khẩu cũ</label>
                        <input className='form-control' type='password'></input>
                    </div>
                    <div className='form-group'>
                        <label>Nhập mật khẩu mới</label>
                        <input className='form-control' type='password'></input>
                    </div>
                    <div className='form-group'>
                        <button className='btn btn-secondary' type='button'>Đổi mật khẩu</button>
                    </div>
                </div>
            </div>
            
            </div>
            <style jsx>
                {`
                .bold{
                    font-size: 1.2rem;
                    font-weigth: 700;
                }
                .body-container{
                    width: 100%;
                    height: auto;
                    margin-top: 5%;
                    margin-bottom: 5%;
                    .content-container{
                        margin-right: auto;
                        margin-left: auto;
                        items-align:center;
                        padding: 0px 2%;
                        display: grid;
                        grid-template-columns: .1fr .3fr 1fr .1fr;

                        .change-pass-form{
                            border: 1px solid grey;
                            border-radius: 10px;
                            margin-top: 3%;
                            padding: 3%;
                            background-color: black;
                            .pass-title{
                                font-size: 3rem;
                                padding-bottom: 1.5rem;
                            }
                            .form-group{
                                label, button{
                                    margin: 2% 0px;
                                }
                            }
                        }
                        .main-body{
                            width: 100%;
                            position: relative;
                            .profile{
                                display: grid;
                                border: 1px solid grey;
                                border-radius: 10px;
                                background-color: white;
                                padding: 3%;
                                
                                grid-template-columns: 1fr .3fr;
                                > div{
                                    margin: 0px 2%;
                                }
                                .form{
                                    margin: 0px 3%;
                                    
                                }
                            }
                            .profile-title{
                                color: var(--main-color);
                                font-size: 3rem;
                                padding-bottom: 1.5rem;
                            }
                            .form-group{
                                margin: 2% 0px;
                            }
                            .form{
                                label, button{
                                    margin: 3% 0px;
                                }
                            }
                        }
                    }
                }
                `}

            </style>
        </div>
    )
}


export async function getStaticProps(ctx) {
    const {API_URL} = process.env;
    const loginInfo = {
        identifier: "nhuwlaftooi",
        password: "1647645024"
    }
    
    const jwt = parseCookies(ctx).jwt;
    
    const login = await fetch(`${API_URL}/auth/local`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginInfo)
    });

    const loginResponse = await login.json();
    const user = loginResponse.user;
    
    const res = await fetch(`${API_URL}/profiles`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
    const data = await res.json();

    return {
        props: {
            data: data,
            authData: loginResponse,
            user: user,
        }
    }
}