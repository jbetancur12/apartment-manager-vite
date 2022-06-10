/**
 * It takes in a bunch of props, and returns a button with the classnames of the props
 * @param  - `icon` - Is this a Icon present in the button
 * @returns A button with a label and an icon
 */
import './Button.scss'
import classnames from 'classnames'

/* Defining the props that the component will take in. */
export interface Props {
  /**
   * Is this a Icon present in the button
   */
  icon?: JSX.Element
  /**
   * A label to show in the button
   */
  label?: string
  /**
   * This is the class of button, the color
   */
  variant?: string
  /**
   * Pass an aditional class
   */
  className?: string
  /** Defining the type of the button. */
  type?: 'button' | 'submit' | 'reset'
  /**
   * How large should the button be?
   */
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
  /**
   * is fullWidth?
   */
  fullWidth?: boolean
  onClick?: () => void
}

const Button: React.FC<Props> = ({
  icon,
  variant = 'primary',
  type = 'button',
  className = '',
  size = 'small',
  fullWidth = false,
  label = 'button',
  onClick
}) => {
  const variantClass = `Button_${variant}`
  const sizeClass = `Button_${size}`
  const fullwidthClass = fullWidth ? 'Button_isFullWidth' : ''
  return (
    <button
      onClick={onClick}
      type={type}
      className={classnames(
        'Button',
        className,
        variantClass,
        sizeClass,
        fullwidthClass
      )}>
      {icon != null ? icon : null}
      <span>{label}</span>
    </button>
  )
}

export default Button
