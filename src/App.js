import { useState } from "react";
import logo from "./assets/investment-calculator-logo.png";
import FormInformation from "./components/FormInformation";
import Table from "./components/ResultTable";

function App() {  
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
    console.log(userInput);
  };

  const yearlyData = [];

  if (userInput) {    

    let currentSavings = +userInput.currentSavings;
    const yearlyContribution = +userInput.yearlySavings;
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    
  }

  const handleReset = () => {
    setUserInput(null)
    console.log("clear")
  };

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <FormInformation
        handleData={calculateHandler}
        handleReset={handleReset}
      />

      {!userInput && <p>Result data is not available!</p>}
      {userInput && <Table investmentData={yearlyData} initialInvestment={userInput.currentSavings}/>}
    </div>
  );
}

export default App;
