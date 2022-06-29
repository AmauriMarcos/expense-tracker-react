import React from 'react'
import styles from '../styles/Balance.module.css';
import { useSelector } from 'react-redux';
import { selectAllTransactions } from '../features/transactions/transactionsSlice';

const Balance = () => {
  const {transactions} = useSelector(selectAllTransactions);
 
  console.log(transactions)
  const amount = transactions.map((transaction) => transaction.amount);
  const arrAmount = amount.map(Number);
  const balance = arrAmount.reduce((sumAmount, current) => sumAmount + current, 0);

  return (
    <div className={styles.Balance}>
        <p style={{color: '#DCD7C9'}}>Your balance</p>
        <h2 style={{color: '#DCD7C9'}}>${balance}</h2>
    </div>
  )
}

export default Balance