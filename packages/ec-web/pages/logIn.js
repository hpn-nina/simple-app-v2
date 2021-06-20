import React from 'react'
import Link from 'next/link'
import axios from 'axios';
import { useState } from 'react';
import { setCookie } from 'nookies';



export default function logIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleSignIn() {
        const loginInfo = {
            identifier: username,
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
                <div className='input group'>
                    <label className='label' for='username'>Hãy nhập tên người dùng hoặc email của bạn</label>
                    <input className='form-control' name='username' type="text" placeholder="Tên người dùng" className="form__input" id='username' required 
                        onChange={e => setUsername(e.target.value)} value={username}
                    />
                </div>
                <div className='input group'>
                    <label className='label' for='password'>Hãy nhập mật khẩu của bạn</label>
                    <input className='form-control' name='password' type="password" placeholder="Mật khẩu" className="form__input" id='password' required
                        onChange={e => setPassword(e.target.value)} value={password}
                    />
                    
                    
                </div>
                <div className="form-check">
                    <input name='checkbox' className="form-check-input position-static" type="checkbox" id="check" value="Allow" aria-label="..."/>
                    <label for='checkbox'>Cho phép chúng tôi ghi nhớ thông tin tài khoản của bạn</label>
                </div>
                <input className="center btn block btn-outline-danger" type='submit' value='Đăng nhập'/>
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
                        font-family: Verdana, san-serif;
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
                        width: 70%;

                    }
                    .input.group{
                        .label{
                            margin: 2% 2%;
                            font-size: .75rem;
                            font-weight: 600;
                        }
                        input{
                            border-radius: 10px;
                        }
                    }
                }

                    
                    `
                }
            </style>

        </div>
    )
}
