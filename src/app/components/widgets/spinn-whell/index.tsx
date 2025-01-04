import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import "./index.scss";
import MsgModal from "../../layouts/msg-modal";

const data = [
  { option: "5%", style: { backgroundColor: "white" } },
  { option: "10%" },
  { option: "5%", style: { backgroundColor: "white" } },
  { option: "10%" },
  { option: "5%", style: { backgroundColor: "white" } },
  { option: "10%" },
  { option: "5%", style: { backgroundColor: "white" } },
  { option: "25%", style: { backgroundColor: "red", textColor: "white" } },
];

const SpinnWhell: React.FC = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [isOpenResultModal, setIsOpenResultModal] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * (data.length - 1));
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  const openResultModal = () => {
    setIsOpenResultModal(true);
  };

  return (
    <div>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
          openResultModal();  // Викликаємо openResultModal після зупинки колеса
        }}
      />

      <MsgModal
        isOpen={isOpenResultModal}
        onClose={() => setIsOpenResultModal(false)}
        title={"Знижка " + data[prizeNumber].option}
        msg={"Ви виграли знижку " + data[prizeNumber].option + "!"}
      />

      <button onClick={handleSpinClick}>SPIN</button>

      <button className="mx-4" onClick={openResultModal}>
        openResultModal
      </button>
    </div>
  );
};

export default SpinnWhell;
