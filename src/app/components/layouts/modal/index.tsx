import React, { useEffect } from "react";
import Modal from "react-modal";
import "./index.scss";
import Fireworks from "../fireworks";
import promoHelper from "../../../helpers/promoHelper";

Modal.setAppElement("#root");

interface ModalLayerProps {
  title?: string;
  children?: React.ReactNode; // Пропс для вкладеного контенту
}

const ModalLayer: React.FC<ModalLayerProps> = ({
  title = "Default Title",
  children,
}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    openModal();

    if (promoHelper.getPromo()) {
      closeModal();
    }
  }, []);

  return (
    <div id="modal">
      {modalIsOpen && <Fireworks />}

      <button
        className={`open-modal-button ${promoHelper.isSent() ? "" : "active"}`}
        onClick={openModal}
      >
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
          {children ? children : <p>-</p>}
          {promoHelper.getPromo() && (
            <p>
              Tým bohrom stěhování vám přeje, abyste dosáhli svých cílů! A my
              vám v tom pomůžeme.
            </p>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ModalLayer;
