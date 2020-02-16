import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Tooltip from '@material-ui/core/Tooltip'
import Slider from '@material-ui/core/Slider'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Result from './Result'

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
    // Set state
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

    if (submitted) {
        return (
            <div>
                <Result user={user} election={percentage*100} salary={salary} expense={(salary / 12) * percentage} savings={(salary / 12) * (1 - percentage)}/>
                <Button variant="contained" color="primary" onClick={buttonPress}>Back</Button>
            </div>
        )
    } else {
        return (
            <div>
                <p>Welcome, {user}</p>
                <Slider
                    ValueLabelComponent={ValueLabelComponent}
                    aria-label="custom thumb label"
                    defaultValue={percentage*100}
                    min={1}
                    max={30}
                    marks={marks}
                    style={{ width: '10em' }}
                    onChangeCommitted={updatePercentage}
                /><br />
                <TextField className="userInputField" label="Your Salary" variant="outlined" type="number" onChange={updateSalary} defaultValue='100000' />
                <p>Your Expense: {formatter.format((salary / 12) * percentage)}</p>
                <p>Your Savings: {formatter.format((salary / 12) * (1 - percentage))}</p>
                <Button variant="contained" color="primary" onClick={buttonPress}>Submit</Button>
            </div>
        );
    }
}

export default UserInput
