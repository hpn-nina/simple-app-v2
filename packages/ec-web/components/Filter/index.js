import React from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap'
import { useContext, useState } from 'react'
import HeaderContext from '../../context/HeaderContext'
import RangeSlider from 'react-bootstrap-range-slider';
import { SeperatePrice } from '../../utils/format';



export default function FilterPlace() {
    const [categories, setCategroies] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [ value, setValue ] = useState(0); 

    const {categoriesItems} = useContext(HeaderContext);
    return (
        <div className='filter'>
            <Form>
                <div className='title'>Lọc kết quả tìm kiếm</div>
                <div>Danh mục</div>
                <Form.Group style={{margin: '4%'}}>
                    <Form.Control 
                        as='select'
                        multiple>
                            {
                                categoriesItems.map(category => (
                                    <option value={category.id}>{category.name}</option>
                                ))
                            }
                        </Form.Control>
                </Form.Group>
                <div>Khoảng giá</div>
                <Form.Group>
                        <RangeSlider 
                                value={value}
                                onChange={e => setValue(e.target.value)}
                                variant='dark'
                                min={0}
                                max={50000000}
                                step={10000}
                            />
                            <Form.Control value={value} onChange={e => setValue(e.target.value)} min={0}
                                max={50000000}/>
                    
                </Form.Group>
                <div style={{margin: '4%'}}>Từ 0 VND đến {SeperatePrice(value)} VND</div>
                <div className='center'>
                <Button style={{fontWeight: '800'}} variant='dark'>Lọc kết quả</Button>
                </div>
            </Form>

            <style jsx>
                {`
                .filter{
                    background-color: var(--main-color);
                    padding: 5%;
                    margin-right: 4%;
                    border-radius: 10px;
                    color: white;
                    font-weight: 800;
                    .title{
                        font-size: 1.6rem;
                        margin-bottom: 5%;
                    }
                    max-height: 500px;
                }
                .center{
                    margin: 4% 0px;
                }
                `}
            </style>
        </div>
    )
}
