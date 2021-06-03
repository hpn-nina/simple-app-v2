import React from 'react';

import { Button, FlatButton, FlatButtonIndexed } from '.';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const Submit = Template.bind({});
Submit.args = {
  size: 'large',
  label: 'Submit',
  backgroundColor: '#e1739f',
}

const But = (args) => <FlatButtonIndexed {...args} />
export const DemoFlatButtonIndexed = But.bind({});
DemoFlatButtonIndexed.args = {
  label: 'DASHBOARD',
}

const But2 = (args) => <FlatButton {...args}/>
export const DemoFlatButton = But2.bind({});
DemoFlatButton.args={
  label: 'MyProfile',
}