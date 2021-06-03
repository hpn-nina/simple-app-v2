import React from 'react';
import Banner from '.';

export default {
  title: 'Components/Banner',
  component: Banner,
};

const Template = (args) => <Banner {...args} />;



export const introBanners = Template.bind({});
introBanners.args = {
  text: 'test',
  classNumber: 3,
  img_src: '/',
  total_slider: 4
}