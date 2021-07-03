import React from 'react'
import WholeSideNav from '../../../components/WholeSideNav'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import {Button, Row, Col} from 'react-bootstrap'

export default function Message(props) {
    return (
        <div className='body-container'>
            <div className='content-container'>
            <div></div>
            <WholeSideNav props={props.user}></WholeSideNav>
            <div className='main-body'>
                <div className='main-content'>
                    <div className='title'>Tin nhắn</div>
                    <br></br>
                    <div className='myMessages'>
                        <Row>
                            <Col><div className='myMessTitle'>Tin nhắn của tôi</div></Col>
                            <Col>
                                <div className='addButton'>
                                    <Link href='/users/message/createMessage'><Button><FontAwesomeIcon icon={faPlus}/> Tạo tin nhắn mới</Button></Link>
                                </div>
                            </Col>
                        </Row>
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
