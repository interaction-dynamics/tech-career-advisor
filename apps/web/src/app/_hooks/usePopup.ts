import { useState } from 'react'

const usePopup = (defaultOpen: boolean = false) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return {
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    isOpen,
  }
}

export default usePopup
