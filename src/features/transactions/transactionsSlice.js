import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    transactions: [],
    loading: false,
    error: null,
}

export const getTransactions = createAsyncThunk(
    "transactions/getTransactions",
    async () => {
        const res = await axios.get('http://localhost:8000/transactions')
        return res.data
    }
)

export const addTransaction = createAsyncThunk(
    "transaction/addTransaction",
    async(data) => {
       const res = await axios.post('http://localhost:8000/transactions', data);
        return res.data
    }
)

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {},
    extraReducers: {
        [getTransactions.pending]: (state) => {
            state.loading = true;
        },
        [getTransactions.fulfilled]: (state, {payload}) => {
            console.log(payload);
            state.loading = false;
            state.transactions = payload;
            state.error = ''
        },
        [getTransactions.rejected]: (state) => {
            state.loading = false;
            state.error = state.error.message;
        },
        [addTransaction.pending]: (state) => {
            state.loading = true;
        },
        [addTransaction.fulfilled]: (state) => {
            state.loading = false;           
        },
        [addTransaction.rejected]: (state) => {
            state.loading = false;
            state.error = state.error.message;
        }
    }
});

export const selectAllTransactions = (state) => state.transactions;

export default transactionsSlice.reducer;

