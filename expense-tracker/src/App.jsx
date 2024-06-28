import React, { useState } from 'react';
import Header from "./components/header";
import Balance from "./components/balance";
import Expens from "./components/income-expenses";
import Trans from "./components/transaction-list";
import Operatn from "./components/operation";

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  return (
    <>
      <Header />
      <div className="container">
        <Balance transactions={transactions} />
        <Expens transactions={transactions} />
        <Trans transactions={transactions} deleteTransaction={deleteTransaction} />
        <Operatn addTransaction={addTransaction} />
      </div>
    </>
  );
}

export default App;
