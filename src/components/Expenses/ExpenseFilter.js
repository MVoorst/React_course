import './ExpenseFilter.css';
import {useState} from "react";

const ExpensesFilter = (props) => {

    const [enteredYear, setEnteredYear] = useState('');

    const selectYearHandler = (event) => {
        event.preventDefault();
        setEnteredYear(event.target.value);

        //receive function from Expenses
        props.onChangeFilter(event.target.value);
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={selectYearHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;