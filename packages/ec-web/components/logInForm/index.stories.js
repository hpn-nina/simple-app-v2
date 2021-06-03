import React from 'react'
import Form from '.'

export default {
    title: 'Components/Form',
    conponents: Form
}

const Template = (args) => <Form {...args}></Form>

export const Test = Template.bind({})