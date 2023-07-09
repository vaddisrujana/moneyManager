import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, expensesAmount, incomeAmount} = props
  console.log(balanceAmount)
  return (
    <div className="background">
      <div className="background1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="image"
          alt="balance"
        />
        <div>
          <p>Your Balance</p>
          <p data-testid="balanceAmount">RS {balanceAmount}</p>
        </div>
      </div>

      <div className="background2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="image"
          alt="income"
        />
        <div>
          <p>Your Income</p>
          <p data-testid="incomeAmount">RS {incomeAmount}</p>
        </div>
      </div>
      <div className="background3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="image"
          alt="expenses"
        />
        <div>
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">RS {expensesAmount}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
