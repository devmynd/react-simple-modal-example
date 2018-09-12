import React from 'react'
import ScrollLock from 'react-scrolllock'
import './SimpleModal.css'

export const SimpleModal = ({ children, onOutsideClick }) => (
  <div className='simple-modal-container' onClick={onOutsideClick}>
    <ScrollLock />
    <div className='simple-modal-inner' onClick={event => event.stopPropagation()}>
      {children}
    </div>
  </div>
)
