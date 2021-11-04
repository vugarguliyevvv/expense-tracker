import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
  const { onSaveNewExpense, onHideForm } = props;

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  function titleChangeHandler(e) {
    setTitle(e.target.value);
  }

  function amountChangeHandler(e) {
    setAmount(e.target.value);
  }

  function dateChangeHandler(e) {
    setDate(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();

    onSaveNewExpense({
      title,
      amount: +amount,
      date: new Date(date)
    });

    setTitle('');
    setAmount('');
    setDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={title} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2021-10-31'
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={onHideForm}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
