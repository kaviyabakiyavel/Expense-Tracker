import React, {useState,useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

export const AddTransaction = () => {
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);
    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = e => {
        debugger
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount //convert string into integer by using "parseInt" or else "+amount"
        }
        addTransaction(newTransaction);
    }
    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" value={text} placeholder="Enter text ..." onChange={(e)=> setText(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label htmlFor = "amount">Amount<br/>(negative - expense, positive - income)</label>
                    <input type="number" id="amount" value={amount} placeholder="Enter amount..." onChange={(e) => setAmount(e.target.value)}/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
