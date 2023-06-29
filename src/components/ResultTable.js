import styles from "./Table.module.css";
function Table({ investmentData, initialInvestment }) {
  console.log(investmentData);
  console.log(initialInvestment);
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentData &&
          investmentData.map((info, index) => (
            <tr key={index}>
              <td>{info.year}</td>
              <td>{info.savingsEndOfYear}</td>
              <td>{info.yearlyInterest}</td>
              <td>
                {info.savingsEndOfYear -
                  initialInvestment -
                  info.yearlyContribution * info.year}
              </td>
              <td>
                {initialInvestment + info.yearlyContribution * info.year}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
