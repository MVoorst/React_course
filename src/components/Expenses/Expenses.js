import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('');

    const selectYearFilterHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const expensesFrom0= props.expenses[0];
    const expensesFrom1= props.expenses[1];
    const expensesFrom2= props.expenses[2];
    const expensesFrom3= props.expenses[3];

    return (

        <div>

            <Card className='expenses'>
                <ExpenseFilter selected={filteredYear} onChangeFilter = {selectYearFilterHandler}/>
                <ExpenseItem title={expensesFrom0.title} amount={expensesFrom0.amount} date={expensesFrom0.date}/>
                <ExpenseItem title={expensesFrom1.title} amount={expensesFrom1.amount} date={expensesFrom1.date}/>
                <ExpenseItem title={expensesFrom2.title} amount={expensesFrom2.amount} date={expensesFrom2.date}/>
                <ExpenseItem title={expensesFrom3.title} amount={expensesFrom3.amount} date={expensesFrom3.date}/>
            </Card>
        </div>
    )


}

export default Expenses;