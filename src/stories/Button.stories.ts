// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Button from './button.component';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    label: {control: 'text', defaultValue: 'Button'}
  },
  parameters: {
    backgrounds: {
      values: [
        {name: 'dark-mode', value: '#000'}
      ]
    },
    viewport: {
      viewports: {
        screen4k: {
          name: 'Large 4k screen',
          styles: {
            width: '3840px',
            height: '2160px'
          }
        }
      }
    }
  }
} as Meta;

const Template: Story<Button> = (args: Button) => ({
  component: Button,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Click me!',
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
