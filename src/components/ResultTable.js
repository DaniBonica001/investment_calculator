import styles from "./Table.module.css";

const formatter = new Intl.NumberFormat('en-US',{
  style:'currency',
  currency:'USD',
  minimumFractionDigits:2,
  maximumFractionDigits: 2,
})

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
              <td>{formatter.format(info.savingsEndOfYear)}</td>
              <td>{formatter.format(info.yearlyInterest)}</td>
              <td>
                {formatter.format(info.savingsEndOfYear -
                  initialInvestment -
                  info.yearlyContribution * info.year)}
              </td>
              <td>
                {formatter.format(initialInvestment + info.yearlyContribution * info.year)}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
