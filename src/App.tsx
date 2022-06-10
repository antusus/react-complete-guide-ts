import React from 'react';
import './App.css';
import {expenses} from "./data/expenses";
import ExpensesList from "./components/expenses/ExpensesList";

function App() {
    return (
        <div className="App">
            <ExpensesList items={expenses}/>
        </div>
    );
}

export default App;
