import type { Meta, StoryObj } from '@storybook/react';
import Dialogus from './Dialogus';

const meta: Meta<typeof Dialogus> = {
  component: Dialogus,
  title: 'Components/Dialog',
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Dialogus>;

export const Basic: Story = {
  args: {
    trigger: 'Trigger',
    title: 'Title',
    description: 'Custom data in this dialog.',
    field1_title: 'Field1',
    field1_content: 'Field1',
    field2_title: 'Field2',
    field2_content: 'Field2',
    onSubmit: (data: [string, string]) => {
      console.log('Submit data:', data);
    },
    submitButton: 'Submit',
  },
};

export const CustomContent: Story = {
  args: {
    trigger: 'Open Custom Dialog',
    title: 'Dialogus',
    description: 'Custom data in this dialog.',
    content: <p>This is custom content'. Everything goes!</p>,
  },
};
