import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
  title: 'shared/Button',
  component: Button,
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>;

export const DefaultBtn: Story = {
  args: {
    children: 'Test',
    isLoading: false,
    className: 'border'
  },
}

export const LoadingBtn: Story = {
  args: {
    children: 'Test',
    isLoading: true,
    className: 'bg-[black] text-white'
  },
}
