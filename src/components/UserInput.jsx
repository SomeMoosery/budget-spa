import React, { useState } from 'react'
// import '../App.css'
import './UserInput.css'
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';

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

function UserInput() {
    // Set state
    const [salary, setSalary] = useState(0)
    const [percentage, setPercentage] = useState(.01)

    const updateSalary = (e) => {
        console.log(salary)
        setSalary(e.target.value)
    }

    const updatePercentage = (e, val) => {
        console.log(e)
        console.log(val)
        console.log(percentage)
        console.log(e.target.value)
        setPercentage(val/100)
    }

    console.log('user input')
    return (
        <div className="App">
            <p>
                Enter some input or something
            </p>
            <Slider
                ValueLabelComponent={ValueLabelComponent}
                aria-label="custom thumb label"
                defaultValue={1}
                min={1}
                max={30}
                marks={marks}
                style={{ width: '10em' }}
                onChangeCommitted={updatePercentage}
            />
            <form noValidate autoComplete="off">
                <TextField className="userInputField" label="Your Salary" variant="outlined" type="number" onChange={updateSalary}/><br />
                <p>Your Expense: {(salary/12)*percentage}</p>
                <TextField className="userInputField" label="Your Savings" variant="outlined" /><br />
            </form>
        </div>
    );
}

export default UserInput
