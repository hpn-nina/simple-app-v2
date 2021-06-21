import React from 'react'

export default function SideNav(props) {
    return (
        <div className='sidenav'>
            <a className='nav-row' href='/user/dashboard'>
                Bảng Điều Khiển
            </a>
            <a className='nav-row' href='/user'>
                Thông tin của tôi
            </a>
            <a className='nav-row' href='/user/message'>
                Tin nhắn
            </a>
            <a className='nav-row' href='/user/jobmanager'>
                Quản lý công việc
            </a>
            

            <style jsx>
                {`
                .sidenav{
                    display: grid;
                    grid-template-rows: 1fr 1fr 1fr 1fr;
                    grid-templat-rows: 1fr;
                    width: 100%;
                    height: auto;
                    background-color: var(--main-color);
                }
                .nav-row{
                    text-align: center;
                    padding: 5% 0px;
                    font-weight: 700;
                    border-bottom: 1px solid white;
                    text-decoration: none;
                    color: white;
                }
                `}
            </style>
        </div>
    )
}
