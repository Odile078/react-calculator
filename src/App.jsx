import { useState } from "react";
import CustomButton from "./components/CustomButton";

const App = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operator, setOperator] = useState("");
  const handlePickNumber = (number) => {
    if (!firstNumber) {
      Number(firstNumber) === 0
        ? setFirstNumber(number)
        : setFirstNumber(firstNumber + number);
    } else {
      if (operator) {
        Number(secondNumber) === 0
          ? setSecondNumber(number)
          : setSecondNumber(secondNumber + number);
      } else {
        Number(firstNumber) === 0
          ? setFirstNumber(number)
          : setFirstNumber(firstNumber + number);
      }
    }
  };
  const calculate = (operator) => {
    let result;
    switch (operator) {
      case "÷":
        result = Number(firstNumber) / Number(secondNumber);
        break;
      case "X":
        result = Number(firstNumber) * Number(secondNumber);
        break;
      case "-":
        result = Number(firstNumber) - Number(secondNumber);
        break;
      case "+":
        result = Number(firstNumber) + Number(secondNumber);
        break;
      case "%":
        result = Number(firstNumber) % Number(secondNumber);
        break;
      default:
        return;
    }
    return result;
  };
  const handlePickOperator = (pickedOperator) => {
    if (
      pickedOperator === "÷" ||
      pickedOperator === "X" ||
      pickedOperator === "-" ||
      pickedOperator === "+" ||
      pickedOperator === "%"
    ) {
      if (operator) {
        const newFirstNumber = calculate(pickedOperator);
        setSecondNumber("");
        setFirstNumber(newFirstNumber);
        setOperator(pickedOperator);
      } else setOperator(pickedOperator);
    } else if (pickedOperator === "=") {
      const newFirstNumber = calculate(operator);
      setFirstNumber(newFirstNumber);
      setSecondNumber("");
      setOperator("");
    } else return;
  };
  const handleReset = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperator("");
  };
  const handleChangeNumberSign = () =>
    firstNumber
      ? setFirstNumber(firstNumber * -1)
      : secondNumber
      ? setSecondNumber(secondNumber * -1)
      : null;

  return (
    <div className="bg-gray-300 min-h-screen flex justify-center items-center">
      <div className="mx-auto max-w-5xl p-4">
        <div className="flex flex-col">
          <div className="bg-gray-600">
            <p className="w-full border border-gray-300 px-10 py-6 text-end text-3xl font-bold text-white">
              {secondNumber || firstNumber || "0"}
            </p>
          </div>
          <div className="flex">
            <div className="flex-1">
              <div className="grid grid-cols-3">
                <CustomButton action={handleReset}>AC</CustomButton>
                <CustomButton action={handleChangeNumberSign}>+/-</CustomButton>
                <CustomButton action={() => handlePickOperator("%")}>
                  %
                </CustomButton>
              </div>
              <div className="grid grid-cols-3">
                {["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."].map(
                  (number, index) => (
                    <CustomButton
                      key={index}
                      action={() => handlePickNumber(number)}
                      spanned={number === "0" ? true : false}
                    >
                      {number}
                    </CustomButton>
                  )
                )}
              </div>
            </div>
            <div className="flex flex-col">
              {["÷", "X", "-", "+", "="].map((operator, index) => (
                <CustomButton
                  key={index}
                  secondary={true}
                  action={() => handlePickOperator(operator)}
                >
                  {operator}
                </CustomButton>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
