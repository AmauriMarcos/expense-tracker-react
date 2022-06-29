import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import styles from '../styles/IncomeExpense.module.css';
import { selectAllTransactions } from "../features/transactions/transactionsSlice";
import { useSelector } from "react-redux";

const IncomeExpense = () => {
  const {transactions} = useSelector(selectAllTransactions);
  const amountArr = transactions.map(transaction => transaction.amount)
  const arr = amountArr.map(Number);
  
  const incomes = arr.filter((number) => number >= 0);
  const expenses = arr.filter((number) => number < 0);

  const totalIncomes = incomes.reduce((sumAmount, current) => sumAmount + current, 0);
  const totalExpenses = expenses.reduce((sumAmount, current) => sumAmount + current, 0);

  return (
    <div className={styles.IncomeExpense}>
      <Paper elevation={3} className={styles.income} sx={{textAlign: 'center', backgroundColor: '#3F4E4F'}}>
        <h4 style={{color: '#DCD7C9'}}>Income</h4>
        <p>${totalIncomes}</p>
      </Paper>
      <Paper elevation={3}  className={styles.expense} sx={{textAlign: 'center', backgroundColor: '#3F4E4F'}}>
        <h4 style={{color: '#DCD7C9'}}>Expense</h4>
        <p>${totalExpenses}</p>
      </Paper>
    </div>
  );
};

export default IncomeExpense;
