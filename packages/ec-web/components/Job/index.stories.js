import React from 'react';

import Job from '.';

export default {
  title: 'components/JobCard',
  component: JobCard,
};

const Template = (args) => <JobCard {...args} />;

export const JobCard = Template.bind({});

JobCard.args = {
  job_id: 1,
  job_name: 'test',
  rating: 3,
  numReviews: 4
}


