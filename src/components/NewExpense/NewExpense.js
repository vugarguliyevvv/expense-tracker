import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense({ onAddExpense }) {
  const [formIsShown, setFormIsShown] = useState(false);

  function saveNewExpenseHandler(newExpense) {
    onAddExpense({
      id: Math.random(),
      ...newExpense,
    });

    setFormIsShown(false);
  }

  function toggleForm() {
    setFormIsShown(prev => !prev);
  }

  return (
    <div className='new-expense'>
      {!formIsShown && <button onClick={toggleForm}>Add New Expense</button>}
      {formIsShown && (
        <ExpenseForm
          onSaveNewExpense={saveNewExpenseHandler}
          onHideForm={toggleForm}
        />
      )}
    </div>
  );
}

export default NewExpense;
