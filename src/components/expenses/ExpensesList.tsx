import {Expense} from "../../data/expenses";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'
import Card from "../Card";

export default function ExpensesList(props: {items: Expense[]}) {
    return (
        <Card className="expenses">
            {props.items.map(e => <ExpenseItem expense={e}/>)}
        </Card>
    );
}