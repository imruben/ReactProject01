import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

function Expenses(props) {
  //default year selected
  const [filterYear, setFilterYear] = useState(2020);

  const changeDefaultState = () => {
    setFilterYear("All years");
  };

  const SaveFilterYearHandler = (inputFilterYear) => {
    setFilterYear(inputFilterYear);
    setTimeout(changeDefaultState, 1000 * 3);
  };

  return (
    <div>
      <h2>{filterYear}</h2>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onSaveFilterYear={SaveFilterYearHandler}
        />
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;

//a lo mejor para renderizar todos los del array expense??
//   {props.items.forEach((expense) => {
//     return (
//       <ExpenseItem
//         title={expense.title}
//         amount={expense.amount}
//         date={expense.date}
//       />
//     );
//   })}
