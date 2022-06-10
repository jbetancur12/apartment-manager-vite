import Button from './Button'
import { FaBeer, FaRocketchat } from 'react-icons/fa'

const iconss = { Icon0: undefined, Icon1: <FaBeer />, Icon2: <FaRocketchat /> }

export default {
  title: 'Button',
  component: Button,

  args: {
    type: 'sucess',
    className: '',
    size: 'small',
    fullWidth: false,
    label: 'Button'
  },
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'sucess', 'error', 'warning'],
      control: {
        type: 'select',
        labels: {
          primary: 'Primary',
          secondary: 'Secondary',
          sucess: 'Sucess',
          error: 'Error',
          warning: 'Warning'
        }
      } // Automatically inferred when 'options' is defined
    },
    size: {
      options: ['xsmall', 'small', 'large', 'xlarge'],
      control: { type: 'select' }
    },
    icon: {
      options: Object.keys(iconss),
      mapping: iconss,
      control: {
        type: 'select', // Type 'select' is automatically inferred when 'options' is defined
        labels: {
          // 'labels' maps option values to string labels
          Icon0: 'Blank',
          Icon1: 'Icon 1',
          Icon2: 'Icon 2'
        }
      }
    }
  }
}

export const Default = ({ ...args }): JSX.Element => <Button {...args} />
