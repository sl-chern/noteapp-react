import React from 'react'
import { RiCloseLine } from 'react-icons/ri'

type ModalProps = {
  children: React.ReactNode,
  closeModal: () => void
}

const Modal: React.FC<ModalProps> = ({ children, closeModal }): React.ReactElement => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center">
      <div className="w-full h-full bg-dark-300 absolute top-0 left-0 opacity-30 z-20" onClick={() => closeModal()}></div>
      <div className="flex flex-col w-2/5 h-auto pb-10 bg-dark-200 absolute rounded z-20">
        <div className="w-full flex flex-row-reverse h-auto">
          <div className="m-2 w-7 h-7 rounded border-2 border-light-300 flex justify-center items-center hover:cursor-pointer hover:bg-dark-100" onClick={() => closeModal()}>
            <RiCloseLine className="text-light-300" size={20}/>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal