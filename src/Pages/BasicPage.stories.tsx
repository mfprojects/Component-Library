import type { Meta, StoryObj } from '@storybook/react';
import BasicPage from '@/Pages/BasicPage';
import Dialogus from '@/components/Dialog/Dialogus';

const meta: Meta<typeof BasicPage> = {
  title: 'Pages/BasicPage',
  component: BasicPage,
};

export default meta;

type Story = StoryObj<typeof BasicPage>;

export const Default: Story = {};
