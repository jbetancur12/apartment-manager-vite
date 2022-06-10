import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.scss'
import classnames from 'classnames'

export interface ModalProps {
  isShown: boolean
  hide: () => void
  modalContent: JSX.Element
  headerText?: string
  classname?: string
}

const Modal: React.FC<ModalProps> = ({
  isShown,
  hide,
  modalContent,
  headerText,
  classname = ''
}) => {
  const modal = (
    <div className="Modal">
      <div className="Modal-backdrop" />
      <div className={classnames('Modal-wrapper', classname)}>
        <div className="Modal-styledModal">
          <div className="Modal-header">
            <div className="Modal-header-text">{headerText}</div>
            <div className="Modal-header-close" onClick={hide}>
              ✖
            </div>
          </div>
          <div className="Modal-content">{modalContent}</div>
        </div>
      </div>
    </div>
  )

  return isShown ? ReactDOM.createPortal(modal, document.body) : null
}

export default Modal
