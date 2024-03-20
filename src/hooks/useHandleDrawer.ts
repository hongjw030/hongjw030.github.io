import { useState } from "react"

export default function useHandleDrawer(defaultOpen=true) {
  const[isOpen, setIsOpen] = useState(defaultOpen);

  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  return {isOpen, handleDrawerOpen, handleDrawerClose};
}
