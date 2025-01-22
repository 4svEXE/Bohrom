import React, { useEffect, useState } from "react";
import { Wheel } from "react-custom-roulette";
import MsgModal from "../../layouts/msg-modal";
import Button from "../../shared/button";
import promoHelper from "../../../helpers/promoHelper";

import "./index.scss";

const SpinnWheel: React.FC = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [isOpenResultModal, setIsOpenResultModal] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const data = [
    { option: "5%", style: { backgroundColor: "white" }, weight: 198 }, // Основний варіант
    { option: "10%", weight: 1 }, // Дуже рідко
    { option: "5%", style: { backgroundColor: "white" }, weight: 198 },
    { option: "10%", weight: 1 },
    { option: "5%", style: { backgroundColor: "white" }, weight: 198 },
    { option: "10%", weight: 1 },
    { option: "5%", style: { backgroundColor: "white" }, weight: 198 },
    { option: "25%", style: { backgroundColor: "red", textColor: "white" }, weight: 0 }, // Не випадає
  ];

  const handleSpinClick = () => {
    if (!mustSpin) {
      const weightedData = data.flatMap((item, index) =>
        Array(item.weight).fill(index)
      ); // Створення масиву з індексів на основі ваг
      const randomIndex =
        weightedData[Math.floor(Math.random() * weightedData.length)];
      setPrizeNumber(randomIndex);
      setMustSpin(true);
    }
  };

  const openResultModal = () => {
    setIsOpenResultModal(true);
  };

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
      <p>Na počest nového roku pro vás máme slevy až 25 %! <b>Akce trvá do konce ledna.</b> </p>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
          promoHelper.setPromo(data[prizeNumber].option);
          openResultModal();
        }}
      />

      <MsgModal
        isOpen={isOpenResultModal}
        onClose={closeResultModal}
        title={"Знижка " + promoHelper.getPromo()}
      />

      <Button
        text="Točit"
        className="mt-8 w-full flex justify-center"
        type="submit"
        disabled={mustSpin}
        onClick={handleSpinClick}
      />

      <hr className="mt-4" />

      <p>Zatočit můžete pouze jednou, poté už nelze výsledek změnit. Hodně štěstí!</p>
    </div>
  ) : (
    <MsgModal
      isOpen={isOpenResultModal}
      onClose={closeResultModal}
      title={"Vaše sleva: " + promoHelper.getPromo()}
    />
  );
};

export default SpinnWheel;

