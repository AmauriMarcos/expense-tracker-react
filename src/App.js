
import styles from "./styles/Home.module.css";
import { Container, Paper } from "@mui/material";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import History from "./components/History";
import AddTransaction from "./components/AddTransaction";

function App() {
  return (
    <Container sx={{'& .css-1efqvsg-MuiPaper-root':{backgroundColor: '#2C3639'}}} maxWidth="lg" className={styles.container}>
      <Paper elevation={3} >
        <h2 className={styles.title}>Expense Tracker</h2>
        <Paper className={styles.Home} sx={{p: 2, }}>
          <Paper elevation={3} sx={{p: 2,}} className={styles.left}>
            <Balance />
            <IncomeExpense />
            <AddTransaction  />
          </Paper>
          <Paper elevation={3} className={styles.right}>
            <History />
          </Paper>
        </Paper>
      </Paper>
    </Container>
  );
}

export default App;
