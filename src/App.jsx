import { useState } from "react";
import CustomButton from "./components/CustomButton";

const App = () => {
  const [result, setResult] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);
  const [operand, setOperand] = useState(null);
  const [operation, setOperation] = useState("");
  const onClickNumber = (number) => {
    if (result === "0" && !firstNumber) {
      console.log("number", number);
      setResult(number);
      setFirstNumber(number);
      setOperation(operation + Number(number));
    } else {
      setResult(result + number);
      setOperation(operation + Number(number));
    }
    console.log("clicked", typeof number);
  };
  const handleChangeOperation = (operator) => {
    if (operation) {
      setOperation(operation + operator);
    } else {
      if (result !== "0") {
        // switch (operator) {
        //   case "÷":
        //     setOperation(Number(result) / firstNumber);
        //     break;
        //   case "X":
        //     console.log("calculate");
        //     break;
        //   case "-":
        //     console.log("calculate");
        //     break;
        //   case "+":
        //     console.log("calculate");
        //     break;
        //   default:
        //     return null;
        // }
        setOperation(Number(result) + operator + null);
      } else return;
    }

    // if (result.includes)
    console.log("operation", result + operator, operator, "result:", result);
  };
  console.log("operation current", operation);
  const handleCalculate = (operator) => {
    console.log("calculate", operator, operation);
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
  const reset = () => {
    setFirstNumber(null);
    setOperand(null);
    setResult("0");
    setOperation("");
  };
  const handleChangeNbrSign = () => setResult(result * -1);
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
                <CustomButton action={reset}>AC</CustomButton>
                <CustomButton action={handleChangeNbrSign}>+/-</CustomButton>
                <CustomButton action={onClickNumber}>%</CustomButton>
              </div>
              <div className="grid grid-cols-3">
                {["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."].map(
                  (number, index) => (
                    <CustomButton
                      key={index}
                      action={() => onClickNumber(number)}
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
