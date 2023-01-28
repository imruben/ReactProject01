import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  //states filtro años
  const [filterYear, setFilterYear] = useState("All years");
  const SaveFilterYearHandler = (inputFilterYear) => {
    setFilterYear(inputFilterYear);
  };

  //filtro por años
  let expensesFilteredbyYear = props.items;
  if (filterYear !== "All years")
    expensesFilteredbyYear = props.items.filter(
      (expense) => expense.date.getFullYear().toString() === filterYear
    );

  return (
    <div>
      <Card className="expenses">
        <h2>{filterYear}</h2>
        <ExpensesFilter
          selected={filterYear}
          onSaveFilterYear={SaveFilterYearHandler}
        />
        <ExpensesChart expenses={expensesFilteredbyYear} />
        <ExpensesList items={expensesFilteredbyYear} />
      </Card>
    </div>
  );
}

export default Expenses;
