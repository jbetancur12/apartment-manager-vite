import { useState } from 'react'

interface Return {
  isShown: boolean
  toggle: () => void
}

export const useModal = (): Return => {
  const [isShown, setIsShown] = useState<boolean>(false)
  const toggle = (): void => setIsShown(!isShown)
  return {
    isShown,
    toggle
  }
}
