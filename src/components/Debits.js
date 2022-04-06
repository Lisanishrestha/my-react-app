// src/components/Debits.js

const Debits = (props) => {
	let debitsView = () => {
    const { debits } = props;
    return debits.map((debit) => {
      let date = debit.date.slice(0,10);
      return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
    }) 
  }
  return (
    <div>
      <h1>Debits</h1>
      {debitsView()}
      <form onSubmit={props.addDebit}>
        <input type="text" name="description" />
        <input type="number" name="amount" />
        <button type="submit">Add Debit</button>
      </form>
    </div>
  )
}

export default Debits;