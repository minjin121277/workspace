import React from 'react';
import { Page } from '../components/Page';

export default {
  title: 'Example/Page',
  component: Page,
  tags: ['autodocs'],
  // render를 안전하게 JSX로
  render: (args) => <Page {...args} />,
};

export const LoggedIn = {
  args: { user: { name: 'Jane Doe' } },
};

export const LoggedOut = {
  args: { user: null },
};
