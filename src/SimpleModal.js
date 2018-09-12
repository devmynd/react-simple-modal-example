import React from 'react'
import ScrollLock from 'react-scrolllock'
import KeyHandler, { KEYDOWN } from 'react-key-handler'
import './SimpleModal.css'

export const SimpleModal = ({ children, onOutsideClick, onEscape }) => (
  <div className='simple-modal-container' onClick={onOutsideClick}>
    <ScrollLock />
    <KeyHandler
      keyEventName={KEYDOWN}
      keyValue='Escape'
      onKeyHandle={onEscape}
    />
    <div className='simple-modal-inner' onClick={event => event.stopPropagation()}>
      {children}
    </div>
  </div>
)
