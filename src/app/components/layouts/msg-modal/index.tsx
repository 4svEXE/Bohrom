import React from "react";
import Modal from "react-modal";
import "./index.scss";
import ContactForm from "../../../pages/home/components/contacts/components/contact-form";

Modal.setAppElement("#root");

interface ModalLayerProps {
  title?: string;
  msg?: string;
  isOpen: boolean;
  onClose: () => void;
}

const MsgModal: React.FC<ModalLayerProps> = ({
  title = "Default Title",
  msg = "some msg",
  isOpen,
  onClose,
}) => {
  return (
    <div id="modal">
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Example Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="ModalHeader">
          <h2>{title}</h2>
          <button onClick={onClose} className="CloseButton">
            ✖
          </button>
        </div>
        <div className="ModalContent">
          {msg}
          <hr />
          <p>
            Напишіть свої дані щоб скористатись знижкою
          </p>

          <div className="flex bg-slate-600">
          <ContactForm/>
          </div>
          </div>

      </Modal>
    </div>
  );
};

export default MsgModal;