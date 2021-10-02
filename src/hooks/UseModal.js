import { useCallback, useState } from "react";

const UseModal = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = useCallback(() => setShowModal(true), []);
  const closeModal = useCallback(() => setShowModal(false), []);

  return { showModal, openModal, closeModal };
};

export default UseModal;
