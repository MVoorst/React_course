import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';

const Expenses = (props) => {
    const expensesFrom0= props.expenses[0];
    const expensesFrom1= props.expenses[1];
    const expensesFrom2= props.expenses[2];
    const expensesFrom3= props.expenses[3];

    return (
        <Card className='expenses'>
            <ExpenseItem title={expensesFrom0.title} amount={expensesFrom0.amount} date={expensesFrom0.date}/>
            <ExpenseItem title={expensesFrom1.title} amount={expensesFrom1.amount} date={expensesFrom1.date}/>
            <ExpenseItem title={expensesFrom2.title} amount={expensesFrom2.amount} date={expensesFrom2.date}/>
            <ExpenseItem title={expensesFrom3.title} amount={expensesFrom3.amount} date={expensesFrom3.date}/>
        </Card>
    )


}

export default Expenses;