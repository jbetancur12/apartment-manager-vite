import Input from './Input'

export default {
  title: 'Input',
  component: Input,

  args: {
    placeholder: 'Ejemplo',
    label: 'Email',
    type: 'text'
  }
  // argTypes: {
  //   type: {
  //     options: ["primary", "secondary", "sucess", "error", "warning"],
  //     control: {
  //       type: "select",
  //       labels: {
  //         primary: "Primary",
  //         secondary: "Secondary",
  //         sucess: "Sucess",
  //         error: "Error",
  //         warning: "Warning",
  //       },
  //     }, // Automatically inferred when 'options' is defined
  //   },
  //   size: {
  //     options: ["xsmall", "small", "large", "xlarge"],
  //     control: { type: "select" },
  //   },
  //   icon: {
  //     options: Object.keys(iconss),
  //     mapping: iconss,
  //     control: {
  //       type: "select", // Type 'select' is automatically inferred when 'options' is defined
  //       labels: {
  //         // 'labels' maps option values to string labels
  //         Icon0: "Blank",
  //         Icon1: "Icon 1",
  //         Icon2: "Icon 2",
  //       },
  //     },
  //   },
  // },
}

export const Default = ({ ...args }): JSX.Element => <Input {...args} />
