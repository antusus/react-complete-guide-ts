import './ExpenseDate.css';

export default function ExpenseDate(props: { date: Date }) {
    function printMonth(date: Date) {
        return date.toLocaleDateString('en-US', {month: "long"});
    }

    function printYear(date: Date) {
        return date.getFullYear();
    }

    function printDay(date: Date) {
        return date.toLocaleDateString('en-US', {day: "2-digit"});
    }

    return (
        <div className="expense-date">
            <div className="expense-date__month">{printMonth(props.date)}</div>
            <div className="expense-date__year">{printYear(props.date)}</div>
            <div className="expense-date__day">{printDay(props.date)}</div>
        </div>
    );
}