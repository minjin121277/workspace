// stories/Button.stories.js
import { fn } from '@storybook/test';
import { Button } from '../src/components//Button';

export default {
  title: 'Example/Button',
  component: Button,         // component도 지정해두면 좋음
  tags: ['autodocs'],
  render: (args) => <Button {...args} />,   // ✅ JSX로!
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select' }, options: ['small', 'medium', 'large'] },
  },
  args: { onClick: fn() },
};

export const Primary = { args: { primary: true, label: 'Button' } };
export const Secondary = { args: { label: 'Button' } };
export const Large = { args: { size: 'large', label: 'Button' } };
export const Small = { args: { size: 'small', label: 'Button' } };
