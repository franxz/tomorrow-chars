import { useState } from "react";

// types for better autocomplete
type Open = () => void;
type HandleClose = (
  event: React.SyntheticEvent | Event,
  reason?: string
) => void;

export function useToast(): [boolean, Open, HandleClose] {
  const [isOpen, setIsOpen] = useState(false);
  return [
    isOpen,
    () => setIsOpen(true),
    (event, reason) => {
      if (reason === "clickaway") return;
      setIsOpen(false);
    },
  ];
}
