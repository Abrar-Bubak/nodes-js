'use client'
import {FormEvent, useState} from 'react'
import './ExpenseTracker.css';
const ExpensePractice = () => {

const [titles,setTitles]=useState ([
    {id:new Date, title:'salry', amount:50000},
    {id:new Date , title:'fees' , amount:-10000},
])
const [text,setText]=useState('');
const [value,setValue]=useState('');

const addTransaction = (e:React.FormEvent) => {
    e.preventDefault();
    if(text.length > 0 && value)
    setTitles ((prev:any)=>{
return [...prev , { title:text , amount:value }]
    });
    setText('');
    setValue('')
}

const calculateBalance =() => {
    let sum =0 ;
    for (let i=0; i < titles.length; i++)
    sum += +titles[i].amount;
return sum;
}

const calculateIncome = () => {
    let Income= 0;
    for (let i= 0; i < titles.length; i++)
    if(titles[i].amount > 0){
        Income += +titles[i].amount
    };
    return Income;
}

const calculateExpense =() => {
   let Expense =0;
   for (let i= 0; i < titles.length; i++)
   if (titles[i].amount < 0){
    Expense += +titles[i].amount
   } ;
   return Expense;
}

const deletHistory = (id:any) => {
setTitles (prev => {
return prev.filter((historyList:any) => historyList.id !== id)
});
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
      <p id="money-plus" className="money plus">$ {calculateIncome()}  </p>
    </div>
    <div>
      <h4>Expense</h4>
      <p id="money-minus" className="money minus">${-calculateExpense()}  </p>
    </div>
  </div>

  <h3>History</h3>
  <ul id="list" className="list">
    {titles.map((title:any,key:any) =>
    <li className={title.amount > 0 ? "plus" :"minus"}>
    {title.title} <span>${title.amount}</span><button
    onClick={()=> deletHistory (title.id)}
    className="delete-btn">x</button>
  </li>
    )}
    
  </ul>

  <h3>Add new transaction</h3>
  <form id="form" onSubmit={addTransaction}>
    <div className="form-control">
      <label htmlFor="text">Text</label>
      <input type="text" id="text" placeholder="Enter text..."
     onChange={(e)=> setText (e.target.value)} 
     value={text}
      />
    </div>
    <div className="form-control">
      <label htmlFor="amount"
        >Amount <br />
        (negative - expense, positive - income)</label>
      <input type="number" id="amount" placeholder="Enter amount..." 
      onChange={(e)=>setValue (e.target.value)}
      value={value}
      />
    </div>
    <button className="btn">Add transaction</button>
  </form>
</div>

    
    </>
  )
}

export default ExpensePractice