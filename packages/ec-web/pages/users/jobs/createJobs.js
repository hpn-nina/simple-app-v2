import React from 'react'
import dynamic from 'next/dynamic'
import { SeperatePrice } from '../../../utils/format'
import CategorySelect from '../../../components/CategoriesSelect'
import { useState } from 'react'


export default function createJobs(props) {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const [timeFinish, setTimeFinish] = useState('');
    const [timeFinishUnit, setTimeFinishUnit] = useState('');
    const [category, setCategory] = useState('');
    const [startingPrice, setStartingPrice] = useState('');
    const [image, setImage] = useState('');
    const [user, setUser] = useState('');
    const [option, setOption] = useState([]);

    function addOptions(){
        var addPlace = document.getElementById('addOption');
        var html = "<label style='margin-bottom:2%;'>Tên lựa chọn</label><input style='padding: 1%; border-radius:4px; padding: 2% auto ;display: block; width: 100%; height: $input-height;  ;padding: $input-padding-y $input-padding-x; font-size: $font-size-base; line-height: $input-line-height; color: $input-color; background-color: $input-bg; background-clip: padding-box; border: $input-border-width solid $input-border-color;' type='text' className='form-control' placeholder='Tên lựa chọn'></input><label style='margin-bottom:2%;'>Mô tả lựa chọn</label><textarea style='padding: 1%; width: 100%; border-radius: 5px; background-clip: padding-box; display: block;' className='form-control' type='text' placeholder='Mô tả về lựa chọn'></textarea><label style='margin-bottom:2%;'>Giá lựa chọn</label><input style='padding: 1%; width: 100%; border-radius: 5px; background-clip: padding-box; display: block;' type='number' className='form-control'></input>";
        var add = document.createElement('div');
        add.className = 'form-group';
        
        add.innerHTML = html;
        addPlace.appendChild(add);
    }

    async function btnClick(){
        const createJobInfo = {
            name: name,
            desc: desc,
            coverImage: coverImage,
            startingPrice: startingPrice,
            timeFinish: timeFinish,
            timeFinishUnit: timeFinishUnit,
            rating: [],
            option: option,
            category: category,
            Image: image,
            meta_title: title,
            meta_desc: desc
        }
    }

    return (
        <div className='container'>
            <div className='title'>Tạo công việc</div>
            <form name='createJob'>
                <div className='form-group'>
                    <label for='name'>Tên công việc</label>
                    <input className='form-control' type='tetx'  name='name' 
                    placeholder='Tên công việc'
                    onChange={e => setName(e.target.value)}
                    value={name}
                    required={true}
                    ></input>

                </div>
                <div className='form-group'>
                    <label for='desc'>Mô tả công việc</label>
                    <textarea className='form-control'
                    type='text' name ='desc' 
                    placeholder='Mô tả'
                    onChange={e => setDesc(e.target.value)}
                    value={desc}
                    required={true}
                    ></textarea>

                </div>
                <div className='form-group'>
                    <label for='coverImage'>Ảnh bìa công việc</label>
                    <input className='form-control' 
                    type='file' name='coverImage'
                    onChange={e => setCoverImage(e.target.value)}
                    value={coverImage}
                    ></input>


                </div>
                <div className='form-group'>
                    <label for='startingPrice'>Giá khởi điểm</label>
                    <input className='form-control' 
                    type='number' name='timeFinishUnit'
                    onChange={e=> setStartingPrice(e.target.value)}
                    value={coverImage}
                    ></input>

                </div>
                <div className='form-group time'>
                    <label for='timeFinish'>Thời gian cần để hoàn thành công việc (Số)</label>
                    <input className='form-control-sm' type='number' name='timeFinish'></input>
                    <label for='timeFinishUnit'>Thời gian cần để hoàn thành công việc (Chữ)</label>
                    <select className='form-control-sm' name='timeFinishUnit'>
                        <option value='Hours'>Giờ</option>
                        <option value='Days'>Ngày</option>
                        <option value='Weeks'>Tuần</option>
                        <option value='Months'>Tháng</option>
                        <option value='Years'>Năm</option>
                    </select>
                </div>
                <div className='form-group' name='option'>
                    Lựa chọn
                    <br></br>
                    <label>Tên lựa chọn</label>
                    <input type='text' className='form-control' placeholder='Tên lựa chọn'></input>
                    <label>Mô tả lựa chọn</label>
                    <textarea className='form-control' type='text' placeholder='Mô tả về lựa chọn'></textarea>
                    <label>Giá lựa chọn</label>
                    <input type='number' className='form-control'></input>
                    <div id='addOption'></div>
                    <button type='button' className='btn btn-outline-light' onClick={() => addOptions()}>Thêm lựa chọn</button>
                    
                    
                </div>
                <div className='form-group' name='category'>
                    <label>Hạng mục công việc</label>
                    <select name='categories' className='form-control'
                    value={category}
                    onChange={e => setCategory(e.target.value)}>
                        {props.categories.map(category => (
                            <option value={category.id}>{category.name}</option>
                        ))}
                    </select>

                </div>
                <div className='form-group'>
                    <label for='Image'>Những hình ảnh liên quan</label>
                    <input className='form-control' type='file' multiple='true'></input>

                </div>
                <div className='form-group'>
                    <button type='button' className='btn btn-outline-danger' onClick={() => btnClick()}>Tạo công việc</button>
                </div>
            </form>

            <style jsx>
                {`
                    
                    .form-group{
                        margin: 5%;
                        label{
                            margin-bottom: 2%;
                        }
                        
                    }
                    .form-group > button {
                        width: 100%;
                        margin: auto;
                    }
                    .form-group.time{
                        label{
                            margin-right: 2%;
                        }
                        input, select{
                            width: 80px;
                        }
                    }
                    #addOPtion{
                        
                    }
                    .btn.btn-outline-light{
                        color: black;
                        margin-top: 2%;
                    }
                `}
            </style>
        </div>
    )
}

export async function getStaticProps(){
    const {API_URL} = process.env;
    const res = await fetch(`${API_URL}/categories`);
    const data = await res.json();

    return {
        props: {
            categories: data
        }
    }
}