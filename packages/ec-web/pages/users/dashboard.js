import React from 'react'
import WholeSideNav from '../../components/WholeSideNav'
import StatisticBoard from '../../components/StatisticBoard'
import NoteBoard from '../../components/NoteBoard'
export default function dashboard(props) {
    return (
        <div className='body-container'>
            <div className='content-container'>
            <div></div>
            <WholeSideNav props={props.user}></WholeSideNav>
            <div className='main-body'>
                <div className='main-content'>
                    <div className='title'>Bảng điều khiển</div>
                    <br></br>
                    <div className='own-container'>
                        <StatisticBoard statistic={[[0,'Tổng số công việc của bạn'],[0, 'Tổng thu nhập'],[0, 'Tổng chi tiêu'],[0, 'Tổng công việc đang làm'],[1, 'Tổng số công việc đang mua'],[0, 'Tổng số công việc đang tìm người làm']]}/>
                    </div>
                    <br></br>
                    <div>
                        <NoteBoard/>
                    </div>
                </div>
            </div>
            
            </div>
            <style jsx>
                {`
                .bold{
                    font-size: 1.2rem;
                    font-weigth: 700;
                }
                .body-container{
                    width: 100%;
                    height: auto;
                    margin-top: 5%;
                    margin-bottom: 5%;
                    .content-container{
                        margin-right: auto;
                        margin-left: auto;
                        items-align:center;
                        padding: 0px 2%;
                        display: grid;
                        grid-template-columns: .1fr .3fr 1fr .1fr;
                        
                        .main-body{
                            width: 100%;
                            position: relative;
                            .main-content{
                                display: grid;
                                border: 1px solid grey;
                                border-radius: 10px;
                                background-color: white;
                                padding: 3%;
                                
                                grid-template-columns: 1fr .3fr;
                                > div{
                                    margin: 0px 2%;
                                }
                                
                            }
                            .title{
                                color: var(--main-color);
                                font-size: 3rem;
                                padding-bottom: 1.5rem;
                            }
                            
                        }
                    }
                }
                `}

            </style>
        </div>
    )
}
