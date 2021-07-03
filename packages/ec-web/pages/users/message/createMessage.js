import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { useState, useContext } from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap'
import AuthContext from '../../../context/AuthContext'

export default function createMessage() {
    const [toUser, setToUser] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

    const { jwt } = useContext(AuthContext)

    const [validated, setValidated] = useState(false);

    const checkValidate = (event) => {
        const form = event.currentTarget;
        if(form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    }

    async function handleSend(ctx) {
        const user = await fetch(`${process.env.API_URL}/profiles/?name=${toUser}`);
        const toSendUserId = user[0].user._id;
        const message = {
            message: message,
            title: title
        }
        const {userId} = useContext(AuthContext)
        
        const recordMessage = await fetch(`${process.env.API_URL}/`)
    }

    return (
        <div className='container'>
            <Form noValidate validate={validated}>
                <Form.Group>
                    <Form.Label>Người nhận</Form.Label>
                    <Form.Control
                        placeholder='Nhập tên người dùng của người bạn muốn gửi tin nhắn'
                        value={toUser}
                        onChange={(e) => setToUser(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Tiêu đề</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Tiêu đề về nội dung chính của tin nhắn của bạn'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Tin nhắn</Form.Label>
                    <Form.Control
                        as='textarea'
                        placeholder='Nội dung chi tiết thông tin cần trao đổi'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}></Form.Control>
                </Form.Group>
                <Button variant='danger'>Gửi tin nhắn</Button>
            </Form>
        </div>
    )
}
