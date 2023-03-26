import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

function AppCompress(props) {
  const [data, dataset] = useState("2022");
  const filterdata = (yearsdata) => {
    dataset(yearsdata);
  };

  const filterExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === data;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter initdata={data} data={filterdata} />
        <ExpensesChart expenses={filterExpenses} />
        <ExpenseList items={filterExpenses} />
      </Card>
    </div>
  );
}

export default AppCompress;
