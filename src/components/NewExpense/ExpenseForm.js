import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  // const [inputTitle, setInputTitle] = useState("");
  // const [inputAmount, setInputAmount] = useState("");
  // const [inputDate, setInputDate] = useState("");

  const [userInput, setUserInput] = useState({
    inputTitle: "",
    inputAmount: "",
    inputDate: "",
  });

  const titleChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        inputTitle: e.target.value,
      };
    });
  };

  const amountChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        inputAmount: e.target.value,
      };
    });
  };

  const dateChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        inputDate: e.target.value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: userInput.inputTitle,
      amount: userInput.inputAmount,
      date: new Date(userInput.inputDate),
    };
    props.onSaveExpenseData(expenseData);
    setUserInput(() => {
      return { inputTitle: "", inputAmount: "", inputDate: "" };
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title: {userInput.inputTitle}</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={userInput.inputTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount: {userInput.inputAmount}</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={userInput.inputAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date: {userInput.inputDate}</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-01-24"
            onChange={dateChangeHandler}
            value={userInput.inputDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
