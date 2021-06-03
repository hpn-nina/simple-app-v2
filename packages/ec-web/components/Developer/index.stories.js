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
    </div>
  );
}

