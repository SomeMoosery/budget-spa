import React from 'react'
import '../App.css'
import Grid from '@material-ui/core/Grid';

function Result({ user, election, salary, expense }) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    })

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <p>Thank you, {user}</p>
                </Grid>
                <Grid item xs={12}>
                    <p>Your Election: {election}%</p>
                </Grid>
                <Grid item xs={12}>
                    <p>Your Salary: {formatter.format(salary)}</p>
                </Grid>
                <Grid item xs={12}>
                    <p>Your Expense: {formatter.format(expense)}</p>
                </Grid>
                <Grid item xs={12}>
                    <p>Your Savings: {formatter.format(salary / 24)}</p>
                </Grid>
            </Grid>

        </div>
    );
}

export default Result
