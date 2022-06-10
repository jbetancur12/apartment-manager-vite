import React from 'react'
import classnames from 'classnames'
import './Card.scss'

interface Props {
  children: React.ReactNode
  /**
   * A classname for the element
   */
  className?: string
  backgroundColor?: string
}

const Card = ({ children, className, backgroundColor }: Props): JSX.Element => {
  return (
    <div className={classnames('Card', className)} style={{ backgroundColor }}>
      {children}
    </div>
  )
}

const Header = ({ children, className }: Props): JSX.Element => {
  return <div className={classnames('Card-header', className)}>{children}</div>
}

const Body = ({ children, className }: Props): JSX.Element => {
  return <div className={classnames('Card-body', className)}>{children}</div>
}

const Title = ({ children, className }: Props): JSX.Element => {
  return (
    <div className={classnames('Card-header-title', className)}>{children}</div>
  )
}

Header.Title = Title

Card.Header = Header
Card.Header.Title = Title
Card.Body = Body

export default Card
