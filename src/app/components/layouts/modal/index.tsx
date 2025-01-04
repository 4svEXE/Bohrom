import React, { useEffect } from "react";
import Modal from "react-modal";
import "./index.scss";

Modal.setAppElement("#root");

interface ModalLayerProps {
  title?: string;
  children?: React.ReactNode; // Пропс для вкладеного контенту
}

const ModalLayer: React.FC<ModalLayerProps> = ({ title = "Default Title", children }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    openModal();
  }, []);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div id="modal">
      <button className="open-modal-button" onClick={openModal}>
        <img src="./assets/icons/spin-whell.svg" alt="Open spin wheel" />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="ModalHeader">
          <h2>{title}</h2>
          <button onClick={closeModal} className="CloseButton">
            ✖
          </button>
        </div>
        <div className="ModalContent">
          {children ? children : <p>I am a modal</p>}
        </div>
      </Modal>
    </div>
  );
};

export default ModalLayer;