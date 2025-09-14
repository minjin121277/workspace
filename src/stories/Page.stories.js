import * as HeaderStories from './Header.stories';
import { Page } from '../src/components/Page';

export default {
  title: 'Example/Page',
  render: (args) => Page(args),
};

export const LoggedIn = {
  args: {
    user: { name: 'Jane Doe' },
  },
};

export const LoggedOut = {
  args: {
    user: null,
  },
};
