import React from 'react'
import './Input.scss'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string
  label?: string
  type?: string
  ref: string
  name?: string
  error?: string
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { placeholder, label, type = 'text', name, error, ...otherProps },
  ref
) => {
  return (
    <div className="Input">
      <div className="Input-container">
        <input
          type={type}
          // required
          placeholder={placeholder}
          name={name}
          {...otherProps}
          ref={ref}
          autoComplete="off"
        />
        <label>{label}</label>
        <span className="Input-error">{error}</span>
      </div>
    </div>
  )
}

const FormInput = React.forwardRef(Input)

export default FormInput
