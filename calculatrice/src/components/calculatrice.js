import React, { useState } from "react";
import Numbers from "./numbers";
import Screen from "./screen";
import "./calculatrice.css";

const buttons = [
  "AC",
  "+/-",
  "%",
  "/",
  "7",
  "8",
  "9",
  "x",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "",
  "0",
  ",",
  "=",
];

function Calculatrice() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Erreur");
    }
  };

  return (
    <div className="calculatrice">
      <Screen value={result} />
      <div className="buttons">
        {buttons.map((button) => (
          <Numbers key={button} number={button} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default Calculatrice;
