import React from 'react'
import '../App.css'
import { Typography, Grid } from '@material-ui/core';

function SplashPage() {
  return (
    <div className="SplashPage">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h3'>
            Carver Edison Case Interview
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h4'>
            Budgeting App
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h5'>
            Developed by Carter Klein
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default SplashPage
