import React, { useState } from 'react'
import Modal from '../components/Organisms/Modal';

export default function Page1(){
    const BUTTON_WRAPPER_STYLES = {
        position: 'relative',
        zIndex: 1
      }
      
      const OTHER_CONTENT_STYLES = {
        position: 'relative',
        zIndex: 2,
        backgroundColor: 'gray',
        padding: '10px'
      }
      const [isOpen, setIsOpen] = useState(false)
      
      return(
        <>
        <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
          <button onClick={() => setIsOpen(true)}>모달창</button>
  
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
           모달창 내용
          </Modal>
        </div>
  
        <div style={OTHER_CONTENT_STYLES}>컨텐츠 내용</div>
      </>
      );
}