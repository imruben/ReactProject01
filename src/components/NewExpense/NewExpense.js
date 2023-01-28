import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showFormInputs, setShowFormInputs] = useState(false);

  const saveExpenseDataHandler = (inputExpenseData) => {
    const expenseData = {
      ...inputExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const showFormClickHandler = () => {
    setShowFormInputs(true);
  };
  const hideFormClickHandler = () => {
    setShowFormInputs(false);
  };

  return (
    <div className="new-expense">
      {showFormInputs && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          hideForm={hideFormClickHandler}
        />
      )}
      {!showFormInputs && (
        <button onClick={showFormClickHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
