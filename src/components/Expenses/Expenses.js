import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseData from "./ExpenseData";
import Card from "../UI/Card";

function Expenses() {
  return (
    <Card className="expenses">
      <h2 className="expenses_title">Expenses</h2>
      {ExpenseData().map(({ title, amount, date }) => (
        <ExpenseItem title={title} amount={amount} date={date}></ExpenseItem>
      ))}
    </Card>
  );
}

export default Expenses;
