import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const getExpenseDataHandler = (enteredExpenseData) => {
    const newExpenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 10).toString(),
    };
    props.onAddExpense(newExpenseData);
    setExpenseFormOpen(false);
  };
  const [ExpenseformOpen, setExpenseFormOpen] = useState(false);
  function formOpenHandler() {
    setExpenseFormOpen(true);
  }
  function formCloseHandler() {
    setExpenseFormOpen(false);
  }
  return (
    <div className="new-expense">
      {!ExpenseformOpen && (
        <button onClick={formOpenHandler}>Add New Expense</button>
      )}
      {ExpenseformOpen && (
        <ExpenseForm
          onSaveExpenseData={getExpenseDataHandler}
          onCancel={formCloseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
