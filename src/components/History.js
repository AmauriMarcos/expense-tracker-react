import React, { useEffect } from "react";
import { Typography, Paper } from "@mui/material";
import styles from "../styles/History.module.css";
import {
  getTransactions,
  selectAllTransactions,
} from "../features/transactions/transactionsSlice";
import { useSelector, useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";

const History = () => {
  const { transactions, loading } = useSelector(selectAllTransactions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = React.useState(0);
  const PER_PAGE = 6;
  const offset = currentPage * PER_PAGE;

  const pageCount = Math.ceil(transactions.length / PER_PAGE);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  return (
    <Paper sx={{ backgroundColor: "#2C3639", p: "1rem", height: '100%' }}>
      <Typography sx={{ mb: 2, color: "#DCD7C9" }} variant="h6">
        History
      </Typography>

      {loading && <h2>Loading...</h2>}

      {!loading && (
        <>
          {transactions.slice(offset, offset + PER_PAGE).map((transaction) => {
            return (
              <Paper
                key={transaction.id}
                elevation={3}
                className={styles.wrap}
                sx={{ mb: 2, backgroundColor: "#3F4E4F", margin: '20px 30px'}}
              >
                <div className={styles.History}>
                  <div className={styles.left}>
                    <h4>{transaction.title}</h4>
                  </div>
                  <div className={styles.right}>
                    <p>{transaction.amount}</p>
                    <span className={`${styles.ball} ${transaction.amount.includes("-") ?  styles.redBall : styles.greenBall}`}></span>
                  </div>
                </div>
              </Paper>
            );
          })}
        </>
      )}
      <div className={styles.paginationBlock}>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={styles.pagination}
          previousLinkClassName={styles.pagination__link}
          nextLinkClassName={styles.pagination__link}
          disabledClassName={styles.pagination__linkDisabled}
          activeClassName={styles.pagination__linkActive}
        />
      </div>
    </Paper>
  );
};

export default History;
