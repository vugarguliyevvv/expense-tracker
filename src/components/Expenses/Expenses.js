import { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

function Expenses({ expenses }) {
  const [year, setYear] = useState('2020');

  function filterChangeHandler(year) {
    setYear(year);
  }

  const filteredExpenses = expenses.filter(expense => expense.date.getFullYear() === +year);

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={year}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
