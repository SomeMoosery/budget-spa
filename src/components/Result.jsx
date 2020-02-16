import React from 'react'
import '../App.css'

function Result({ user, election, salary, expense, savings }) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    })

    return (
        <div>
            <p>Thank you, {user}</p>
            <p>Your Election: {election}%</p>
            <p>Your Salary: {formatter.format(salary)}</p>
            <p>Your Expense: {formatter.format(expense)}</p>
            <p>Your Savings: {formatter.format(salary/24)}</p>
        </div>
    );
}

export default Result
