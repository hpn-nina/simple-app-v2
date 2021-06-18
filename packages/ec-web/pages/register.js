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
                <div className='form column'>
                    <input type="text" placeholder="Tên người dùng" class="form__input" id='name' required />
                    <input type="password" placeholder="Mật khẩu" class="form__input" id='password' required/>
                    <input type="password" placeholder="Nhập lại mật khẩu" class="form__input" id='re-password' required/>
                    
                </div>
                <div className='form column'>
                    <input type="text" placeholder="Tên của bạn" class="form__input" id='name' required />
                    <input type="email" placeholder="Email" class="form__input" id='email' required/>
                    <input type='number' placeholder='Số điện thoại'/>
                    <div>Đăng ký</div>
                </div>
            </form>
            <style jsx>
            {
                `
                input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
                }

                /* Firefox */
                input[type=number] {
                -moz-appearance: textfield;
                }
                input[type=submit]{
                    display: block;
                    text-align: center;
                }

                #register-form{
                    width: 80%;
                    margin: 50px auto;
                    flex-wrap: wrap;
                    background-color: pink;
                    border: 1px solid pink;
                    text-align: center;
                    border-radius: 10px;
                    >*{
                        margin: 5px;
                    }
                    .header-box.column{
                        font-weight: bold;
                        font-family: Verdana, san-serif;
                        font-size: 3rem;
                        display: block;
                    }
                    
                }

                `
            }
                
            </style>
        </div>
    )
}
