'use client'
import React from 'react'
import { useState } from 'react';
import './ExpenseTracker.css';
const ExpenseTracker = () => {

  const [transactions, setTransactions] = useState([
    { id: 0, transaction: 'salry', amount: 50000 },
    { id: 1, transaction: 'fees', amount: -5000 },
  ])
  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')

  const addTransaction = (e: React.FormEvent) => {
    e.preventDefault();

    if (text.length > 0 && amount) {
      setTransactions((prev: any) => {
        return [...prev, { transaction: text, amount: amount }]
      });
      setText('');
      setAmount('')
    }

  }

const calculateBalance = () => {
  let sum = 0;
  for (let i=0; i < transactions.length; i++){
    sum += +transactions[i].amount};
return sum;
}

const calculateIncome = () => {
let Income=0
for (let i=0; i < transactions.length; i++)
{
  if(transactions[i].amount > 0)
  {
    Income += +transactions[i].amount
  };
}
    
return Income;
}
const calculateExpense = () => {
  let Expenses = 0;
  for (let i= 0; i < transactions.length; i++)
  {
    if(transactions[i].amount < 0)
    {
      Expenses += +transactions[i].amount
    };
  }
  return Expenses;
}

const deletHistory = (id: any) => {
  setTransactions(prev => {
    return prev.filter((transactionList: any) => transactionList.id !== id);
  })
}







  return (
    <>

      <h2>Expense Tracker</h2>

      <div className="container">
        <h4>Your Balance</h4>
        <h1 id="balance">$ {calculateBalance()} </h1>

        <div className="inc-exp-container">
          <div>
            <h4>Income</h4>
            <p id="money-plus" className="money plus">$  {calculateIncome()} </p>
          </div>
          <div>
            <h4>Expense</h4>
            <p id="money-minus" className="money minus">$ {calculateExpense()} </p>
          </div>
        </div>

        <h3>History</h3>
        <ul id="list" className="list">
          {transactions.map((transaction, key) =>
            <li className={transaction.amount > 0 ? 'plus' : "minus"}>
              {transaction.transaction} <span>${transaction.amount}
              </span><button
              onClick={()=> deletHistory(transaction.id)}
              className="delete-btn">x</button>
            </li>
          )}


        </ul>

        <h3>Add new transaction</h3>
        <form id="form" onSubmit={addTransaction}>
          <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" id="text" placeholder="Enter text..."
             value={text}
              onChange={(e) => setText(e.target.value)}


            />
          </div>
          <div className="form-control">
            <label htmlFor="amount"
            >Amount <br />
              (negative - expense, positive - income)</label>
            <input type="number" id="amount" placeholder="Enter amount..."
             value={amount}
              onChange={(e) => setAmount(e.target.value)}

            />
          </div>
          <button className="btn">Add transaction</button>
        </form>
      </div>

    </>
  )
}

export default ExpenseTracker