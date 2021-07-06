import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { useContext, useState } from 'react'
import AuthContext from '../../../../context/AuthContext'
import { getSession } from 'next-auth/client'
import { Row, Col, Button } from 'react-bootstrap'
import fecth from 'isomorphic-fetch'

export default function logs(props) {
    console.log(props.session)
    return (
        <div className='container'>
            
        </div>
    )
}

export const getServerSideProps = async({req, res, query}) => {
    const session = await getSession({req});
    const transactionId = query.transaction;

    const transaction = await fecth(`${process.env.API_URL}/transactions/${transactionId}`,{
        method: "GET",
        headers: {
            "Authorzation" : `Bearer ${session.jwt}`
        }
    })
    const data = await transaction.json();

    return {
        props: {
            session,
            transaction: data
        }
    }
}