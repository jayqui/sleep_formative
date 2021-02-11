import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { makeStyles } from '@material-ui/core/styles';

import { nameEmailConfig, mainTextFieldsConfig } from 'components/NewDiaryEntry/newDiaryEntryConfig';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
}));

function NewDiaryEntry() {
  const classes = useStyles();

  return (
    <form className={classes.root}>
      <h1>New Sleep Diary Entry</h1>
      <p>One of the most critical aspects of your success is this sleep diary.
      Please fill it out within 30 minutes of waking so your certified sleep specialist
        has an accurate picture of your progress.</p>
      <TextField id='Name' label='Name' variant='outlined' />
      <TextField id='Email' label='Email' variant='outlined' />
      sleep coach

      <TextField id='TodaysDate' label="Today's Date" type='date' variant='outlined' />
      <TextField id='CurrentTime' label="Current Time" type='date' variant='outlined' />
      <TextField id='nap-or-doze-count' label="How many times did you nap or doze yesterday?" InputProps={{ inputProps: { max: 100, min: 0, } }} type='number' variant='outlined' />
      <TextField id='nap-or-doze-duration' label="In total, how many minutes did you nap or doze?" helperText="Please enter the total number of minutes you napped yesterday. For example, enter 45 if you took a 30-minute nap AND a 15-minute nap." InputProps={{ inputProps: { min: 0, max: 100 } }} type='number' variant='outlined' />
      <TextField id='bed-entry-last-night' label="What time did you get into bed last night?" helperText="Midnight = 12:00 AM" type='time' variant='outlined' />
      <TextField id='time-tried-sleep' label="What time did you try to go to sleep?" helperText='Midnight = 12:00 AM' type='time' variant='outlined' />
      <TextField id='fall-asleep-duration' label="How long did it take you to fall asleep?" helperText='Please enter the time it took you to fall asleep in minutes.' type='number' InputProps={{ inputProps: { min: 0, max: 1000 } }} variant='outlined' />
      <TextField id='awakenings-count' label='How many times did you wake up, not counting your final awakening?' type='number' InputProps={{ inputProps: { min: 0, max: 100 } }} variant='outlined' />
      <TextField id='awakenings-duration' label="In total, how many minutes did these awakenings last?" helperText='Please enter the total number of minutes these awakenings lasted. For example, enter 80 if you were awake 4 times for 20-minutes each time.' type='number' InputProps={{ inputProps: { min: 0, max: 1000 } }} variant='outlined' />
      <TextField id='final-awakening-time' label="What time was your final awakening?" helperText='Please double check the AM/PM selected.' type='number' variant='outlined' />
      <TextField id='out-of-bed-time' label="What time did you get out of bed for the day?" helperText='Please double check the AM/PM selected.' type='number' variant='outlined' />
      <FormControl component="fieldset">
        <FormLabel component="legend">Did you take any over-the-counter or prescription medication(s) to help you sleep?</FormLabel>
        <RadioGroup aria-label="gender" name="customized-radios">
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="No" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
      <TextField id='out-of-bed-time' label="If yes, please list:" variant='outlined' />
      <FormControl component="fieldset">
        <FormLabel component="legend">How would you rate the quality of your sleep?</FormLabel>
        <RadioGroup aria-label="gender" name="customized-radios">
          <FormControlLabel value="Very Poor" control={<Radio />} label="Very Poor" />
          <FormControlLabel value="Poor" control={<Radio />} label="Poor" />
          <FormControlLabel value="Fair" control={<Radio />} label="Fair" />
          <FormControlLabel value="Good" control={<Radio />} label="Good" />
          <FormControlLabel value="Very Good" control={<Radio />} label="Very Good" />
        </RadioGroup>
      </FormControl>
      <TextField id='out-of-bed-time' label="Comments (if applicable)" variant='outlined' />
      <Button variant='contained' color='primary'>Submit</Button>
    </>
  )
}

NewDiaryEntry.propTypes = {

}

export default NewDiaryEntry
