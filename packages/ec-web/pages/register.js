import React from 'react';
import axios from 'axios';
import { SyntheticEvent, useState } from 'react';

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


export default function register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit (){
        const registerInfo = {
            username: username,
            email: email,
            password: password,
        };

        const register = await fetch(`http://localhost:1337/auth/local/register`,{
            method: "POST",
            handlers: {
                "Accept": 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(registerInfo)
        })

        const registerResponse = await register.json();
        console.log(registerResponse)
        

    }
    return (
        <div id='register-pg'>
            <form id='register-form'>
                <div className='header-box column'>
                    Thông tin đăng ký
                </div>
                <div className=''>
                    <input className='form-control' type="text" placeholder="Tên người dùng" className="form__input" required 
                        onChange={e => setUsername(e.target.value)} value={username}
                    />
                    <input className='form-control' type="email" placeholder="Email" className="form__input" required
                        onChange={e => setEmail(e.target.value)} value={email}
                    /> 
                    <input className='form-control' type="password" placeholder="Mật khẩu" className="form__input" required 
                        onChange={e => setPassword(e.target.value)} value={password}
                    />
                </div>
                
                <button type="button" onClick={() => submit()} className="center btn block btn-outline-danger">Đăng ký</button>
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
                #register-pg{
                    width: 100%;
                }
                #register-form{
                    width: 80%;
                    margin: 50px auto;
                    background-color: pink;
                    border: 1px solid pink;
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
                }

                `
            }
                
            </style>
        </div>
    )
}
