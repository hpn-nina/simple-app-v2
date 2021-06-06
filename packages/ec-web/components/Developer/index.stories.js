import React from 'react';

import Developer from '.';


export default {
  title: 'components/Developer',
  component: Developer,
};

const Template = (args) => <Developer {...args} />;
export const Default = Template.bind({});
Default.args = {
  name: 'None', 
  src: '/',
  description: 'This is test',
} ;


export const DevelopersCard = () => {
  return (
    <div className='about-us'>
      <h1 className='title'>Đội ngũ phát triển</h1>
      <Developer name='Huỳnh Phương Như' src='./HuynhPhuongNhu_image.jpg' description='Proin rhoncus ligula erat, commodo tristique est porttitor sit amet. Donec quis ipsum finibus, sollicitudin leo at, euismod augue. Curabitur elementum tempor quam ut iaculis. Morbi efficitur magna id eros auctor fermentum. Sed tristique eget turpis non ultrices. Vestibulum faucibus suscipit erat, in auctor neque suscipit a. Pellentesque sit amet enim a metus rutrum semper. ' />
      <Developer name='Lâm Thành Tín' src='./LamThanhTin_image.jpg' description='Proin rhoncus ligula erat, commodo tristique est porttitor sit amet. Donec quis ipsum finibus, sollicitudin leo at, euismod augue. Curabitur elementum tempor quam ut iaculis. Morbi efficitur magna id eros auctor fermentum. Sed tristique eget turpis non ultrices. Vestibulum faucibus suscipit erat, in auctor neque suscipit a. Pellentesque sit amet enim a metus rutrum semper. ' />
      <Developer name='Nguyễn Văn Dũng' src='./NguyenVanDung_image.jpg' description='Proin rhoncus ligula erat, commodo tristique est porttitor sit amet. Donec quis ipsum finibus, sollicitudin leo at, euismod augue. Curabitur elementum tempor quam ut iaculis. Morbi efficitur magna id eros auctor fermentum. Sed tristique eget turpis non ultrices. Vestibulum faucibus suscipit erat, in auctor neque suscipit a. Pellentesque sit amet enim a metus rutrum semper. ' />
      <Developer name='Lê Đoàn Thiện Nhân' src='./LeDoanThienNhan_image.jpg' description='Proin rhoncus ligula erat, commodo tristique est porttitor sit amet. Donec quis ipsum finibus, sollicitudin leo at, euismod augue. Curabitur elementum tempor quam ut iaculis. Morbi efficitur magna id eros auctor fermentum. Sed tristique eget turpis non ultrices. Vestibulum faucibus suscipit erat, in auctor neque suscipit a. Pellentesque sit amet enim a metus rutrum semper. ' />
      
      <style jsx>
            {
                `
                /*Start Developer area*/
                img.medium{
                  margin-right: auto;
                  margin-left: auto;
                }
                .about-us {
                    display: grid;
                    grid-template-columns: auto auto ;
                    grid-template-rows: auto auto auto;
                    justify-items: center;
                    margin: 10px;
                    width: 100%;
                    height: auto;
                  }
                .about-us img{
                    text-align: center;
                    align-items: center;
                    align-self: center;
                    width: 100%;
                    height: auto;
                }
                  .developer-card{
                    color: black;
                    font-size: large;
                    padding: 5px;
                    margin: 10px;
                    display: block;
                  }
                  
                  .developer-name{
                      font-weight: bold;
                      font-size: 3rem;
                      text-align: center;
                  }

                  .developer-description{
                      text-align: center;
                      font-size: 1.5rem;
                  }

                  .about-us .title{
                      text-align: center;
                      font-size: 3rem;
                      font-weight: 900;
                      grid-area: 1 / 1/ 1/ 3;
                  }

                .developer-card img{
                    display: block;
                    margin: 0 auto;
                }
                `
            }

            </style>
    </div>
  );
}

