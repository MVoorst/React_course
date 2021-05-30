import './ExpenseItem.css'
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import {useState} from 'react';


const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);
    /*const [describes the function, update function] = useState(props.title);
    * useState always returns an array with 2 arguments*/
    console.log('started');

    const clickHandler = () => {
        setTitle('Updated');
        console.log(title);
    }


    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>

            {/*<button onClick={clickHandler()}>Change Title</button> <- {
            de () zorgen ervoor dat de methode wordt aangeroepen bij inladen van jsx, dus nog voor de kick}
            */}
        </Card>
    )
 }



 export default ExpenseItem;