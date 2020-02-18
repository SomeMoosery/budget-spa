import React from 'react'
import '../App.css'
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

function Result({ user, election, salary, expense }) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    })

    return (
        <div className='budgetContent'>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant='h3'>Thank you, {user}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h6'>Your Election: {election}%</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h6'>Your Salary: {formatter.format(salary)}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h6'>Your Expense: {formatter.format(expense)}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h6'>Your Savings: {formatter.format(salary / 24)}</Typography>
                </Grid>
            </Grid>

        </div>
    );
}

export default Result
