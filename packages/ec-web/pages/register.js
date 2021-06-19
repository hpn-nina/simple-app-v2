import React from 'react';
import axios from 'axios';

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }



export default function register() {
    return (
        <div id='register-pg'>
            <form action='/logIn' method='POST' id='register-form'>
                <div className='header-box column'>
                    Thông tin đăng ký
                </div>
                <div className=''>
                    <input className='form-control' type="text" placeholder="Tên người dùng" className="form__input" id='name' required />
                    <input className='form-control' type="email" placeholder="Email" className="form__input" id='email' required/> 
                </div>
                <div className=''>
                    <input className='form-control' type="password" placeholder="Mật khẩu" className="form__input" id='password' required/>
                    <input className='form-control' type="password" placeholder="Nhập lại mật khẩu" className="form__input" id='re-password' required/>
                    
                </div>
                <div className="form-check">
                    <input name='checkbox' className="form-check-input position-static" type="checkbox" id="check" value="Allow" aria-label="..."/>
                    <label for='checkbox'>Cho phép chúng tôi ghi nhớ thông tin tài khoản của bạn</label>
                </div>
                <input className="center btn block btn-outline-danger" type='submit' value='Đăng ký'/>
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
