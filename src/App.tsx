import React from 'react';
import './App.css';
import ExpenseItem from "./components/ExpenseItem";
import {expenses} from "./components/expenses";

function App() {
    const expense = expenses[0]
    return (
        <div className="App">
            <ExpenseItem expense={expenses[0]}/>
            <ExpenseItem expense={expenses[1]}/>
            <ExpenseItem expense={expenses[2]}/>
        </div>
    );
}

export default App;
