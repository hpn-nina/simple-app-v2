import React from 'react'
import Link from 'next/link'

export default function logIn() {
    return (
        <div className='login-pg'>
            <div className='form-card'>
                <div>
                    <h1 className='center white form-heading'>Đăng nhập ngay</h1>
                    <hr className='seperator'></hr>
                </div>
                <form method="POST" action='/' id='login-form'>
                    <dl>
                        <dd><label for = 'username'>Tên đăng nhập</label></dd>
                        <dt><input type='text' name='username' id='username' placeholder='Điền username của bạn' /></dt>
                        <dd><label for = 'password'>Mật khẩu</label></dd>
                        <dt><input type='text' name='password' id='password' placeholder='Điền mật khẩu của bạn'/></dt>
                    </dl>
                    <div className='form-row '>
                        <button className='submitbtn' type='submit'>Đăng nhập</button>
                    </div>
                    <div className='registerlnk'>
                        Chưa có tài khoản? <Link href='/register'> Hãy nhấp vào đây để đi đến trang đăng ký</Link>
                    </div>
                </form>
            </div>
            <style jsx>
                {
                    `
                    .login-pg{
                        background-color: var(--secondary-color);
                        padding: 30px;
                        margin-top: 20px;
                        margin-bottom: 30px;
                    }
                    #login-form{
                        input{
                            border-radius: 10px;
                            margin-bottom: 10px;
                        }
                        dl{
                            margin: 10px;
                        }
                    
                    }
                    .form-card{
                     
                        background-color: var(--main-color);
                        color: white;
                        border: 1rem solid white;
                        border-radius: 20px;
                        margin-top: 50px;
                        margin-right: auto;
                        margin-left: auto;
                        margin-bottom: 50px;
                        width: 50%;
                        text-align: center;
                        display: block;
                        
                        .center{
                            text-align: center;
                        }
                        .white{
                            color: white;
                        }
                        .form-heading{
                            font-size: 3rem;
                            padding-top: 10px;
                            padding-bottom: 10px;
                            font-family: Verdana,sans-serif;
                        }
                        .form-row{
                            padding: 10px;
                        }
                        
                        hr.seperator{
                            width: 80%;
                            color: white;
                            margin: auto;
                            font-size: bold;
                        }
                        .submitbtn{
                            background-color: rgb(225,115,159);
                            border: .3rem solid white;
                            color: white;
                            border-radius: 10px;
                            padding: 5px;
                            margin: auto;
                            font-size: medium;
                            font-weight: 800;
                        }
                        .submitbtn:hover{
                            background-color: white;
                            color: rgb(225,115,159);
                            transition-delay: .1s;
                            transition-timing-function: linear;
                        }
                        
                        .registerlnk{
                            padding: 8px 20px;
                        }
                    }
                    `
                }
            </style>

        </div>
    )
}
