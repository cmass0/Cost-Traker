import "./ExpenseForm.css";

function DefaultForm(props) {
  function click(e) {
    props.onchangeExpense(e);
  }
  return (
    <div className="new-expense">
      <button onClick={click}>Add new Expense</button>
    </div>
  );
}

export default DefaultForm;
