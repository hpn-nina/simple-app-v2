import React from 'react'
import Link from 'next/link'
import axios from 'axios';
import { useState } from 'react';
import { setCookie } from 'nookies';



export default function logIn() {
    const [identifier, setIndentifier] = useState('');
    const [password, setPassword] = useState('');

    async function handleSignIn() {
        const loginInfo = {
            identifier: identifier,
            password: password
        }

        const login = await fetch('http://localhost:1337/auth/local', {
            method: "POST",
            handler: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(loginInfo)
        });

        const loginResponse = await login.json();
        console.log(loginResponse);
        setCookie(null, 'jwt', loginResponse.jwt, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/'
        })
    };

    return (
        <div className='login-pg'>
            <form id='login-form'>
                <div className='header-box column'>
                    Thông tin đăng nhập
                </div>
                <div className='form-group'>
                    <label className='label' for='identifier'>Hãy nhập tên người dùng hoặc email của bạn</label>
                    <input className='form-control' name='identifier' type="text" placeholder="Tên người dùng hoặc email của bạn" className="form__input" id='identifier' required 
                        onChange={e => setUsername(e.target.value)} value={identifier}
                    />
                </div>
                <div className='form-group'>
                    <label className='label' for='password'>Hãy nhập mật khẩu của bạn</label>
                    <input className='form-control' name='password' type="password" placeholder="Mật khẩu" className="form__input" id='password' required
                        onChange={e => setPassword(e.target.value)} value={password}
                    />
                    
                    
                </div>
                <div className="form-check">
                    <input name='checkbox' className="form-check-input position-static" type="checkbox" id="check" value="Allow" aria-label="..."/>
                    <label for='checkbox'>Cho phép chúng tôi ghi nhớ thông tin tài khoản của bạn</label>
                </div>
                <button className="center btn block btn-outline-danger" type='button' onClick={() => handleSignIn()} >Đăng nhập</button>
                <div className='forgot'><a href='/forgotPassword'>Quên mật khẩu?</a> Hãy nhấn vào đây để tìm lại mật khẩu ngay nhé!</div>
            </form>
            <style jsx>
                {
                    `
                input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
                }
                .block{
                    display: block;
                }

                input[type=submit]{
                    display: block;
                    text-align: center;
                }
                #loginr-pg{
                    width: 100%;
                }
                #login-form{
                    width: 80%;
                    margin: 50px auto;
                    color: var(--main-color);
                    background-color: white;
                    border: 1rem solid pink;
                    text-align: center;
                    border-radius: 10px;
                    .header-box.column{
                        font-weight: bold;
                        font-family: 'Playfair Display', sans-serif;
                        font-size: 3rem;
                        display: block;
                        margin-top: 2%;
                        margin-bottom: 2%;
                    }
                    .form__input{
                        display: block;
                        width: 90%;
                        padding: 1rem 0px;

                        margin-left: auto;
                        margin-right: auto;
                    }
                    .btn.block{
                        margin-left: auto;
                        margin-right: auto;
                        margin-top: 2%;
                        margin-bottom: 2%;
                    }
                    .form-check{
                        margin-top: 2%;

                        margin-right: auto;
                        margin-left: auto;
                        display: block;
                        width: 30%;

                    }
                    .form-group{
                        .label{
                           text-align: left; 
                            margin: 2%;
                            font-weight: 600;
                        }
                        input{
                            border-radius: 10px;
                        }
                    }
                    .forgot{
                        margin-top: 2%;
                        margin-bottom: 2%;
                        a{
                            color: red;
                        }
                    }
                }

                    
                    `
                }
            </style>

        </div>
    )
}
