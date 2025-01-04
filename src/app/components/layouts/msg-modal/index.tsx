import React, { useState } from "react";
import Modal from "react-modal";
import ContactForm from "../../widgets/contact-form";
import promoHelper from "../../../helpers/promoHelper";
import Button from "../../shared/button";
import { svg } from "../../../svg";

import "./index.scss";

Modal.setAppElement("#root");

interface ModalLayerProps {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
}

const MsgModal: React.FC<ModalLayerProps> = ({
  title = "Default Title",
  isOpen,
  onClose,
}) => {
  const [isContactForm, setIsContactForm] = useState(false);

  const handleClick = () => {
    setIsContactForm(true);
  };

  return (
    <div id="MsgModal">
      {!isContactForm ? (
        <Modal
          isOpen={isOpen}
          onRequestClose={onClose}
          contentLabel="Example Modal"
          className="Modal"
          overlayClassName="Overlay"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0)",
            },
          }}
        >
          <div className="ModalHeader">
            <h2>{title}</h2>
            <button onClick={onClose} className="CloseButton">
              ✖
            </button>
          </div>
          <div className="ModalContent">
            {!promoHelper.isSent() && (
              <div className="">
                <p>
                  Chcete-li jej použít, vyplňte formulář. Do hodiny vás budeme
                  kontaktovat.
                </p>
                <hr className="mb-4" />
              </div>
            )}

            {promoHelper.isSent() ? (
              <div className="success-message">
                <h4 className="text-black">Děkujeme za vaši žádost!</h4>
                <p>Do hodiny vás budeme kontaktovat.</p>
                <img
                  className="mt-10"
                  src="/assets/img/why-us/3.svg"
                  alt="Excellent Customer Service"
                ></img>
              </div>
            ) : (
              <Button
                onClick={handleClick}
                text="Získejte slevu"
                icon={svg.truck}
                className="mt-8 w-full md:w-auto m-auto animated show delay-3"
              />
            )}
          </div>
        </Modal>
      ) : (
        <Modal
          isOpen={isOpen}
          onRequestClose={onClose}
          contentLabel="Example Modal"
          className="Modal"
          overlayClassName="Overlay"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0)",
            },
          }}
        >
          <button onClick={() => setIsContactForm(false)}> ← </button>
          <ContactForm formClasses="dark" />
        </Modal>
      )}
    </div>
  );
};

export default MsgModal;
