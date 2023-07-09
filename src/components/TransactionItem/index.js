import './index.css'

const TransactionItem = props => {
  const {transactionList, deleteTransaction} = props
  const {title, amount, type, id} = transactionList
  const onDelete = () => {
    deleteTransaction(id)
  }
  return (
    <div className="each_transaction">
      <div className="each_transaction">
        <p>{title}</p>
        <p>{amount}</p>
        <p>{type}</p>
      </div>
      <button
        type="button"
        className="button1"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="image"
        />
      </button>
    </div>
  )
}

export default TransactionItem
