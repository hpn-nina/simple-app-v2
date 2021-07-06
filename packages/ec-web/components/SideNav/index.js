import React from 'react'
import Link from 'next/link';
import UserProfile from '../../pages/users';

export default function SideNav(props) {
    return (
        <div className='sidenav'>
            <Link href={{
                pathname:'/users/dashboard',
                query: { dashboard: UserProfile.dashboard}
            }}>
            <a className={'nav-row ' + (props.active === 'dashboard' ? 'active' : '')}>
                Bảng Điều Khiển
            </a>
            </Link>
            <Link href={{
                pathname: '/users',
                query: {}
            }}>
            <a className={'nav-row ' + (props.active === 'index' ? 'active' : '')} >
                Thông tin của tôi
            </a>
            </Link>
            <Link href={{
                pathname: '/users/message',
                query: { message: UserProfile.message }
            }}>
            <a className={'nav-row ' + (props.active === 'message' ? 'active' : '')}>
                Tin nhắn
            </a>
            </Link>
            <Link href={{
                pathname:'/users/jobs',
                query:{ jobs: UserProfile.jobs}
            }}>
            <a className={'nav-row ' + (props.active === 'jobs' ? 'active' : '')}>
                Quản lý công việc
            </a>
            </Link>
            <Link href={{
                pathname:'/users/myTransactions',
                query:{}
            }}>
            <a className={'nav-row ' + (props.active === 'jobs' ? 'active' : '')}>
                Đơn hàng của tôi
            </a>
            </Link>

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
                .active.nav-row{
                    color: grey;
                    
                }
                `}
            </style>
        </div>
    )
}
