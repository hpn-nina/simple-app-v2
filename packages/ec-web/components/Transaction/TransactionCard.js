import React, {useContext} from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import {SeperatePrice} from '../../utils/format'
import Link from 'next/link'
import AuthContext from '../../context/AuthContext';
import fecth from 'isomorphic-fetch'

export default function TransactionCard(props) {
    const {transaction, count} = props;

    const { jwt } = useContext(AuthContext);

    async function handleDelete(e, ctx) {
        const res1 = await fecth(`${process.env.API_URL}/transactions/${transaction._id}`,{
            method: "DELETE",
            headers: {
                "Authorization" : `Bearer ${jwt}`
            }
        })
        alert('Hủy đơn hàng thành công');
    }

    return (
        <div className='transaction'>
            <div className='center sm-title'>Thông tin đơn hàng {count}</div>
            <Row>
                <Col style={{paddingLeft: '5%'}}>
                    <div>Công việc: <div className='bold'>{transaction.job.name}</div></div>
                    <div>Option chọn: {transaction.pickedOption.optionName}</div>
                    <div>Ghi chú của bạn: {transaction.note ? transaction.note : ''}</div>
                </Col>
                <Col>
                    <div>Số tiền: <div className='bold'>{SeperatePrice(transaction.amount)}</div></div>
                    <div>Ngày tạo đơn: {transaction.createdAt ? transaction.createdAt.substring(0,10) : ''}</div>
                </Col>
            </Row>
            <div className='center btn-zone'>
                <div className='btn-container'>
                    <Button variant='danger' onClick={(e) => handleDelete(e)}>Hủy đơn hàng</Button>
                </div>
                <div className='btn-container'>
                    <Link href='/users/message'><a><Button variant='secondary' className='Button'>Nhắn tin với Freelancer</Button></a></Link>
                </div>
                <div className='btn-container'>
                    <Link href={`/jobs/${transaction.job.id}`}><a><Button className='Button'>Xem công việc này</Button></a></Link>
                </div>
            </div>
            <style jsx>
                {`
                .transaction{
                    background-color: white;
                    border-radius: 10px;
                    padding: 2%;
                    margin: 2%;
                }
                .center{
                    text-align:center;

                    .btn-container{
                        display: inline;
                        margin: 2%;
                    }
                }
                .bold{
                    display: inline;
                    font-weight: 600;
                }
                .sm-title{
                    font-size: 1.3rem;
                    font-weight: 600;
                }
                .center.btn-zone{
                    margin-top: 3%;
                }
                `}
            </style>
        </div>
    )
}
