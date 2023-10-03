'use client'

import { useState } from "react"
import "./ExpenseTracker.css"

const ExpenseTracker = () => {
const [titles,setTitles] =useState ([
    {id:0,title:"salary" , value:50000},
    {id:1,title:"shopping" , value:-3000},
]) 
const [text,setText]=useState ('')

const [value,setValue]=useState('')

const addTransaction = (e: React.FormEvent) => {
  e.preventDefault();
    if  (titles.length > 0 && +value !=0){

         setTitles((prev:any)=>{
            return[...prev, {title:text,value:value}]
        });
        setText('');
        setValue('')
    }
}


const calculateBalance = () => {
  let sum = 0;
  for(let i = 0; i < titles.length; i++){
    sum += +titles[i].value;
  }
  return sum;
}
 

const calculateIncome = () => {
  let Income=0;
  for (let i= 0 ; i < titles.length ; i++){
    if(titles[i].value > 0){
      Income += +titles[i].value
    };
  }
  return Income;
}

const calculateExpense = () => {
  let Expense =0 ; 
  for (let i = 0 ; i < titles.length; i++){
    if(titles[i].value < 0){
      Expense += +titles[i].value
    };
  }
  return Expense;
}
 const deletHistory = (id:any) => {
setTitles (prev =>{
  return prev.filter((transactionHistory:any)=> transactionHistory.id !==id);

})
 }



  return (
<>

<h2>Expense Tracker</h2>

    <div className="container">
      <h4>Your Balance</h4>
      <h1 id="balance">${calculateBalance()}</h1>

      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">$ {calculateIncome()} </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">$ {calculateExpense()} </p>
        </div>
      </div>

      <h3>History</h3>
      <ul id="list" className="list">
        {titles.map((title:any , key:any) =>(
            <li key={key} className={title.value < 0 ? "minus":'plus'}>
          {title.title} <span>{title.value}</span><button 
          onClick={() => deletHistory(title.id)}
          className="delete-btn">x</button>
        </li>
        ))}
      
         
      </ul>

      <h3>Add new transaction</h3>
      <form id="form"  onSubmit={addTransaction}>
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
          value={value}

        
          onChange={(e) => setValue(e.target.value)}
        
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>


</>


  )

}

export default ExpenseTracker