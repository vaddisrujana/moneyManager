import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionList: [],
    title: '',
    amount: '',
    type: transactionTypeOptions[0].displayText,
  }

  deleteTransaction = id => {
    const {transactionList} = this.state
    const filteredList = transactionList.filter(each => each.id !== id)
    this.setState({transactionList: filteredList})
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      title: '',
      amount: '',
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  getExpenses = () => {
    const {transactionList} = this.state
    let expensesAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })

    return expensesAmount
  }

  getIncome = () => {
    const {transactionList} = this.state
    let incomeAmount = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    console.log(incomeAmount)
    return incomeAmount
  }

  getBalance = () => {
    const {transactionList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })

    balanceAmount = incomeAmount - expensesAmount
    console.log(balanceAmount)
    return balanceAmount
  }

  render() {
    const {transactionList, title, amount, type} = this.state
    const {balanceAmount} = this.getBalance()
    const {incomeAmount} = this.getIncome()
    const {expensesAmount} = this.getExpenses()
    return (
      <div className="back">
        <div className="back1">
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <div>
          <MoneyDetails
            balanceAmount={balanceAmount}
            expensesAmount={expensesAmount}
            incomeAmount={incomeAmount}
          />
        </div>
        <div className="back2">
          <div className="back6">
            <h1>Add Transaction</h1>
            <form className="back3" onSubmit={this.onAddTransaction}>
              <label htmlFor="title">TITLE</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={this.onChangeTitle}
              />
              <label htmlFor="amount">AMOUNT</label>
              <input
                type="text"
                id="amount"
                value={amount}
                onChange={this.onChangeAmount}
              />
              <label htmlFor="select">TYPE</label>
              <select id="select" value={type} onChange={this.onChangeType}>
                {transactionTypeOptions.map(each => (
                  <option value={each.optionId} key={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <div>
                <button
                  type="submit"
                  className="button"
                  onClick={this.getBalance}
                >
                  ADD
                </button>
              </div>
            </form>
          </div>
          <div className="back4">
            <h1>History</h1>
            <div className="back5">
              <p className="para">Title</p>
              <p className="para">Amount</p>
              <p className="para">Type</p>
            </div>
            {transactionList.map(each => (
              <TransactionItem
                transactionList={each}
                deleteTransaction={this.deleteTransaction}
                key={each.id}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
