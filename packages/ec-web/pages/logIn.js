import React from 'react'
import Link from 'next/link'
import axios from 'axios';

function clicksubmitbtn(){
    
}

async function submit(){
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const { data } = await axios.post('http://localhost:1337/auth/local',{
        identifier: username,
        password: password,
    });
    alert(data);
}

export default function logIn() {
    return (
        <div className='login-pg'>
            <form action='/logIn' method='POST' id='login-form'>
                <div className='header-box column'>
                    Thông tin đăng nhập
                </div>
                <div className='input group'>
                    <label for='username'>Hãy nhập tên người dùng hoặc email của bạn</label>
                    <input className='form-control' name='username' type="text" placeholder="Tên người dùng" className="form__input" id='name' required />
                </div>
                <div className='input group'>
                    <label for='pasword'>Hãy nhập mật khẩu của bạn</label>
                    <input className='form-control' name='password' type="password" placeholder="Mật khẩu" className="form__input" id='password' required/>
                    
                    
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
                        label{
                            margin: 2% 2%;
                            text-align: left;
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
