import React from 'react';

import Head from '.';

export default {
  title: 'components/Head',
  component: Head,
};

const Template = (args) => <Head {...args} />;

export const TestHead = Template.bind({});
TestHead.args = {
    title: "HI this is test",
    description: "This is only for testing",
    title: "Second",
    url: "#"
}