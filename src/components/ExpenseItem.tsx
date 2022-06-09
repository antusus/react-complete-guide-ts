import './ExpenseItem.css';
import {Expense} from "./expenses";
import ExpenseDate from "./ExpenseDate";


function ExpenseItem(props: { expense: Expense }) {

    return (
        <div className="expense-item">
            <ExpenseDate date={props.expense.date}/>
            <div className="expense-item__description">
                <h2>{props.expense.title}</h2>
                <div className="expense-item__price">${props.expense.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;