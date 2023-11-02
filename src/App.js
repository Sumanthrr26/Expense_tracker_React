import React, { useState } from "react";
import "./App.css";
import Expense from "./Components/Expenses/Expense";
import NewExpense from "./Components/NewExpense/NewExpense";
const DUMMY_Expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
console.log(DUMMY_Expenses);
function App() {
  const [expenses, setExpenses] = useState(DUMMY_Expenses);
  const addExpenseHandler = (expense) => {
    console.log("in App.js");
    console.log(expenses);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    DUMMY_Expenses.push(expense);
  };
  return (
    <div className="App">
      <h1> Let's start new project</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      
      <Expense items={expenses} />
    </div>
  );
}

export default App;
