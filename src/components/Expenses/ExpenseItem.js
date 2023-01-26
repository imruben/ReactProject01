import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpensesDate";
import { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const [date, setDate] = useState(props.date);

  const clickHandler = () => {
    setTitle("Updated!");
  };

  function getRandomDate() {
    const maxDate = Date.now();
    const timestamp = Math.floor(Math.random() * maxDate);
    return new Date(timestamp);
  }
  const randomDateHandler = () => {
    setDate(getRandomDate());
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <button onClick={randomDateHandler}>Random Date</button>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}€</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
