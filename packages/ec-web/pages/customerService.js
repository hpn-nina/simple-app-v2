import React from 'react'

export default function customerService() {
    return (
        <div className='pg-container'>
            <div className='banner'>
                <img src='/banner/OurTeamBanner.png'></img>
            </div>
            <div className='form-card'>
                <form>
                    <div className='title'>Đơn chăm sóc khách hàng</div>
                    <div className='main'>
                        <div className='form-group '>
                            <label for='name'>Tên khách hàng</label>
                            <input type='text' className='form-control' id='name' placeholder='Tên người dùng' required></input>
                        </div>
                        <div className='form-group '>
                            <label for='phone'>Số điện thoại</label>
                            <input type='text' className='form-control' id='phone' placeholder='Điền vào số điện thoại bạn nhé'></input>
                        </div>
                        <div className='form-group '>
                            <label for='email'>Email</label>
                            <input type='email' id='email' className='form-control' placeholder='Điền vào email của bạn để chúng tôi có thể liên hệ sớm nhất' required></input>
                        </div>
                        <div className='form-group '>
                            <label for='job'>Mã công việc liên quan</label>
                            <input type='text' className='form-control' id='job' placeholder='Nếu như muốn nói điều gì về một công việc trên hệ thống của chúng tôi, hãy điền vào đây nhé'></input>
                        </div>
                        <div className='form-group'>
                            <label for='topic'>Bạn điền đơn này để làm gì</label>
                            <select class='form-control' id='topic'>
                                <option name='Liên hệ hợp tác'>Liên hệ hợp tác</option>
                                <option name='Kiến nghị về một nội dung'>Kiến nghị về một nội dung</option>
                                <option name='Phàn nàn về một đơn hàng'>Phàn nàn về một đơn hàng</option>
                                <option name='Đặt câu hỏi'>Đặt câu hỏi</option>
                                <option name='Khác'>Khác</option>
                            </select>
                        </div>
                        <div className='form-group '>
                            <label for='title'>Tiêu đề</label>
                            <input type='text' className='form-control' name='title' id='title' placeholder='Hãy điền vào chủ đề chính của thông tin bạn muốn nhắn gửi' required></input>
                        </div>
                        <div className='form-group '>
                            <label for='desc'>Mô tả chi tiết</label>
                            <textarea className='form-control' id='desc' placeholder='Hãy nêu chi tiết yêu cầu của bạn để chúng tôi có thể giúp đỡ nhanh nhất nhé' required></textarea>
                        </div>
                        <div className='form-group'>
                            <label for='file'>Hình ảnh liên quan</label>
                            <input type='file' className='form-control-file' id='file' name='file'></input>
                        </div>
                        <div className='form-group'>
                            <input className="center btn block btn-outline-danger" type='submit' value='Gửi ngay'/>
                        </div>
                    </div>
                </form>
            </div>
            <style jsx>
                {`
                .pg-container{
                    width: 100%;
                    height: auto;
                }
                .banner{
                    width: 100%;
                    margin-bottom: 2%;

                    img{
                        width: 100%;
                    }
                }
                .title{
                    text-align: center;
                    font-weight: 700;
                    font-size: 2rem;
                }
                .form-card{
                    margin-right: auto;
                    margin-left: auto;
                    items-align: center;
                    width: 80%;
                    .btn{
                            margin-left: auto;
                            margin-right: auto;
                            text-align: center;
                            align-items: center;
                        }
                    .form-group{
                        margin: 2%;
                        
                        > label{
                            margin: 10px;
                        }
                    }
                }
                `}
            </style>
        </div>
    )
}
