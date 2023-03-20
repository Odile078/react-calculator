import { useState } from "react";
import CustomButton from "./components/CustomButton";

const App = () => {
  const [result, setResult] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);
  const [operation, setOperation] = useState("");
  const onClickNumber = (number) => {
    if()
    console.log("clicked");
  };
  const handleChangeOperation = (operator) => {
    console.log(
      "operation",
      operator,
      Number(`${Number("2") * Number("2") + 0} `)
    );
  };
  const handleCalculate = (operator) => {
    switch (operator) {
      case "÷":
        console.log("calculate");
        break;
      case "X":
        console.log("calculate");
        break;
      case "-":
        console.log("calculate");
        break;
      case "+":
        console.log("calculate");
        break;
      default:
        return null;
    }
  };
  const handlePickOperator = (operator) => {
    if (
      operator === "÷" ||
      operator === "X" ||
      operator === "-" ||
      operator === "+"
    ) {
      handleChangeOperation(operator);
    } else if (operator === "=") {
      handleCalculate(operator);
    } else return;
  };
  return (
    <div className="bg-gray-300 min-h-screen flex justify-center items-center">
      <div className="mx-auto max-w-5xl p-4">
        <div className="flex flex-col">
          <div className="bg-gray-600">
            <p className="w-full border border-gray-300 px-10 py-6 text-end text-3xl font-bold text-white">
              {result}
            </p>
          </div>
          <div className="flex">
            <div className="flex-1">
              <div className="grid grid-cols-3">
                <CustomButton action={onClickNumber}>AC</CustomButton>
                <CustomButton action={onClickNumber}>+/-</CustomButton>
                <CustomButton action={onClickNumber}>%</CustomButton>
              </div>
              <div className="grid grid-cols-3">
                {["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."].map(
                  (number, index) => (
                    <CustomButton
                      key={index}
                      action={onClickNumber}
                      spanned={number === 0 ? true : false}
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
