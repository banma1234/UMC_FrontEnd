import React from 'react'
import ReactDom from 'react-dom' //포털 수행

const MODAL_STYLES = {
  position: 'fixed', //상단, 하단 고정
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLES = { //오버레이
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

// styled-components 사용

export default function Modal({ open, children, onClose }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        {children} 
        <p></p>
        <button onClick={onClose}> 닫기</button>

      </div>
    </>,
    document.getElementById('portal') //포털 id
  )
}

