import { Button } from '../components/Button';

export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select' }, options: ['small', 'medium', 'large'] },
  },
};

export const Primary = { args: { primary: true, label: 'Button', onClick: () => {} } };
export const Secondary = { args: { label: 'Button', onClick: () => {} } };
export const Large = { args: { size: 'large', label: 'Button', onClick: () => {} } };
export const Small = { args: { size: 'small', label: 'Button', onClick: () => {} } };
