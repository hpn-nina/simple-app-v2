import React from 'react';

import Seller from '.';

export default {
  title: 'components/Seller',
  component: Seller,
};

const Template = (args) => <Seller {...args} />;

export const TestSeller = Template.bind({})

TestSeller.args = {
  _id: 1,
  name: 'Test',
  rating: 4,
  numReviews: 3,
  numJobs: 4,
}