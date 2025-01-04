import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import "./index.scss";

const data = [
  { option: "5%", style: { backgroundColor: "white" } },
  { option: "10%" },
  { option: "5%", style: { backgroundColor: "white" } },
  { option: "10%" },
  { option: "5%", style: { backgroundColor: "white" } },
  { option: "10%" },
  { option: "5%", style: { backgroundColor: "white" } },
  { option: "25%", style: { backgroundColor: "red", textColor: "white"  } },
];

const SpinnWhell: React.FC = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * (data.length-1));
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <div>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />

      <button onClick={handleSpinClick}>SPIN</button>
    </div>
  );
};

export default SpinnWhell;
