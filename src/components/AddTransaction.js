import React, {useState} from "react";
import { TextField, Typography, Paper, Button } from "@mui/material";
import { addTransaction, getTransactions } from "../features/transactions/transactionsSlice";
import { useDispatch } from "react-redux";

const AddTransaction = () => {
  const [transactionName, setTransactionName] = useState('');
  const [amount, setAmount] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      transactionName,
      amount
    }
    
    if(transactionName && amount){
      dispatch(addTransaction(data)).then(() => {
        dispatch(getTransactions());
        setAmount("");
        setTransactionName("");
      })         
    }
  }

  console.log('add new transaction');

  return (
    <Paper elevation={3} sx={{px: 2, py: 2, backgroundColor: '#2C3639'}}>
      <Typography sx={{ my: 1, color: 'white' }} align="center" variant="subtitle1">
        Add transaction
      </Typography>
      <form style={{color: 'white'}}>
        <div s>
          <Typography variant={'secondary'} sx={{display: 'inline-block', marginBottom: '.5rem'}}>
            Text
          </Typography>
          <TextField
            sx={{input:{color: 'white', }, '& label': {color: 'white', marginBottom: '1rem'}, fieldset: { borderColor: "#DCD7C9" }, }}
            fullWidth
            value={transactionName}
            id="outlined-basic"
            label="Text"
            variant="outlined"
            onChange={(e) => setTransactionName(e.target.value)}
          />
        </div>

        <div>
          <Typography sx={{display: 'inline-block', margin: '2rem 0 .5rem 0'}} variant="subtitle2">
            Amount
            (negative - expense, positive - income)
          </Typography>
         
          <TextField
            sx={{ input:{color: 'white'}, color: 'white', '& label': {color: 'white',}, fieldset: { borderColor: "#DCD7C9", } }}
            fullWidth
            value={amount}
            id="outlined-basic"
            label="Amount"
            variant="outlined"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <Button onClick={handleSubmit} sx={{mt: 2, p: 1, backgroundColor: "#3F4E4F", '&:hover': {backgroundColor: '#A27B5C'}}} fullWidth variant="contained">Add transaction</Button>
      </form>
    </Paper>
  );
};

export default AddTransaction;
