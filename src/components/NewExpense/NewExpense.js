import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData,

        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    if (!isEditing) {
        return (<div className='new-expense'>
            <button onClick={startEditingHandler}>Add New Expense</button>
        </div>)
    } else {
        return (
            <div className='new-expense'>
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>
            </div>
        )
    }

};

export default NewExpense;