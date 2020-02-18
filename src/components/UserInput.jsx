import React, { useState } from 'react'
import '../App.css'
import { Result } from '../index'
import PropTypes from 'prop-types'
import { Tooltip, Slider, TextField, Button, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core'

const marks = [
    {
        value: 1,
        label: '1%',
    },
    {
        value: 30,
        label: '30%',
    },
]

function ValueLabelComponent(props) {
    const { children, open, value } = props;
    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
};

function UserInput({ user }) {
    const [salary, setSalary] = useState(100000)
    const [percentage, setPercentage] = useState(.01)
    const [submitted, setSubmitted] = useState(false)

    const updateSalary = (e) => {
        setSalary(e.target.value)
    }

    const updatePercentage = (e, val) => {
        setPercentage(val / 100)
    }

    const buttonPress = () => {
        setSubmitted(!submitted)
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    })

    const CustomSlider = withStyles({
        root: {
            color: 'primary',
        },
        thumb: {
            height: 30,
            width: 30,
            backgroundColor: '#fff',
            border: '2px solid currentColor   ',
            marginTop: -10,
            marginLeft: -15,
            '&:focus,&:hover,&$active': {
                boxShadow: 'inherit',
            },
        },
        track: {
            height: 8,
            borderRadius: 4,
        },
        rail: {
            height: 8,
            borderRadius: 4,
        },
    })(Slider);

    if (submitted) {
        return (
            <div>
                <Result user={user} election={percentage * 100} salary={salary} expense={(salary / 12) * percentage} savings={(salary / 12) * (1 - percentage)} />
                <div className="bottomButton"><Button variant="contained" color="primary" onClick={buttonPress}>Back</Button></div>
            </div>
        )
    } else {
        return (
            <div className='budgetContent'>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Typography variant='h3'>Welcome, {user}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <CustomSlider
                            valueLabelDisplay="auto"
                            aria-label="custom slider"
                            defaultValue={percentage * 100}
                            min={1}
                            max={30}
                            marks={marks}
                            style={{ width: '20em' }}
                            onChangeCommitted={updatePercentage}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField className="userInputField" label="Your Salary" variant="outlined" type="number" onChange={updateSalary} defaultValue='100000' />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h6'>Your Expense: {formatter.format((salary / 12) * percentage)}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h6'>Your Savings: {formatter.format((salary / 12) * (1 - percentage))}</Typography>
                    </Grid>
                </Grid>
                <div className="bottomButton"><Button className="bottomButton" variant="contained" color="primary" onClick={buttonPress}>Submit</Button></div>
            </div>
        );
    }
}

export default UserInput
