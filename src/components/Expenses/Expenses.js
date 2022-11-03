import React from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseData from "../../ExpenseData";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = () => {
  return (
    <Card className="expenses">
      {ExpenseData.map((expenseData) => {
        return (
          <ExpenseItem
            key={expenseData.id}
            title={expenseData.title}
            date={expenseData.date}
            amount={expenseData.amount}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
