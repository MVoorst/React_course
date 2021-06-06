import './ExpenseItem.css'
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import {useState} from 'react';


const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);
    /*const [describes the function, update function] = useState(props.title);
    * useState always returns an array with 2 arguments*/

    const clickHandler = () => {
        setTitle('Updated');
    }


    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date}/>
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>{props.amount}</div>
                </div>

                {/*<button onClick={clickHandler()}>Change Title</button> <- {
                de () zorgen ervoor dat de methode wordt aangeroepen bij inladen van jsx, dus nog voor de kickoff}
                */}
            </Card>
        </li>
    )
 }



 export default ExpenseItem;