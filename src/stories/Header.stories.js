import { Header } from '../components/Header';

export default {
  title: 'Example/Header',
  component: Header,
  tags: ['autodocs'],
  render: (args) => <Header {...args} />,
};

export const LoggedIn = {
  args: { user: { name: 'Jane Doe' }, onLogout: () => {}, onLogin: () => {}, onCreateAccount: () => {} },
};

export const LoggedOut = {
  args: { user: null, onLogout: () => {}, onLogin: () => {}, onCreateAccount: () => {} },
};
