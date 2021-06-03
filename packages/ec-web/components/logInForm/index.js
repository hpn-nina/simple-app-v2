import React from 'react'
import { Button } from '../Button/index'
import './style.module.css'

function submit(){

}

export default function Form() {
    return (
        <div className='form-card'>
            <div>
                <h1 className='center white form-heading'>Đăng nhập ngay</h1>
                <hr></hr>
            </div>
            <form method="POST">
                <div className='form-row'>
                    <label for = 'username'>Username</label>
                    <input type='text' name='username' id='username' placeholder='Điền username của bạn' />
                </div>
                <div className='form-row'>
                    <label for = 'password'>Mật khẩu</label>
                    <input type='text' name='password' id='password' placeholder='Điền mật khẩu của bạn'/>
                </div>
                <div className='form-row '>
                    <button className='submitbtn' type='submit'>Đăng nhập</button>
                </div>
            </form>
        </div>
    )
}
