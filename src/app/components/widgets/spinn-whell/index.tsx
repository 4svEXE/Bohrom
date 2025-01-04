import React, { useEffect, useState } from "react";
import { Wheel } from "react-custom-roulette";
import MsgModal from "../../layouts/msg-modal";
import Button from "../../shared/button";
import promoHelper from "../../../helpers/promoHelper";

import "./index.scss";

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

const SpinnWheel: React.FC = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [isOpenResultModal, setIsOpenResultModal] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  // Обробник кліку на кнопку SPIN
  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  // Відкриття модального вікна
  const openResultModal = () => {
    setIsOpenResultModal(true);
  };

  // Закриття модального вікна
  const closeResultModal = () => {
    setIsOpenResultModal(false);
  };

  useEffect(() => {
    if (promoHelper.getPromo()) {
      openResultModal();
    }
  }, []);

  return !promoHelper.getPromo() ? (
    <div>
      <p>Na počest nového roku pro vás máme slevy až 25 %! </p>
      {/* Рулетка */}
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
          promoHelper.setPromo(data[prizeNumber].option); // Зберігаємо вибраний приз
          openResultModal(); // Відкриваємо модальне вікно
        }}
      />

      {/* Модальне вікно з результатом */}
      <MsgModal
        isOpen={isOpenResultModal}
        onClose={closeResultModal}
        title={"Знижка " + promoHelper.getPromo()}
      />

      <Button
        text="kroutit"
        className="mt-8 w-full flex justify-center"
        type="submit"
        disabled={mustSpin}
        onClick={handleSpinClick}
      />

      <hr className="mt-4" />

      <p>Zatočit můžete pouze jednou, poté už nelze výsledek změnit. Hodně štěstí!</p>
    </div>
  ) : (
    // Якщо промокод уже отриманий, просто показуємо повідомлення
    
    <MsgModal
      isOpen={isOpenResultModal}
      onClose={closeResultModal}
      title={"Vaše sleva: " + promoHelper.getPromo()}
    />
  );
};

export default SpinnWheel;
