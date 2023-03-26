import "./NewExpense.css";
import React from "react";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const formdata = (enteredformdata) => {
    const expensedata = {
      ...enteredformdata,
      id: Math.random().toString(),
    };
    console.log(expensedata);
    props.onAddExpense(enteredformdata);
  };

  function onCancle(e) {
    props.onCancle(e);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveformdata={formdata} onCancle={onCancle} />
    </div>
  );
}

export default NewExpense;
