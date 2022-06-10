import './ExpenseItem.css';
import {Expense} from "../../data/expenses";
import ExpenseDate from "./ExpenseDate";
import Card from "../Card";


function ExpenseItem(props: { expense: Expense }) {

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.expense.date}/>
            <div className="expense-item__description">
                <h2>{props.expense.title}</h2>
                <div className="expense-item__price">${props.expense.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;