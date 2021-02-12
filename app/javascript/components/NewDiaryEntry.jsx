import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import { makeStyles } from '@material-ui/core/styles';

import { nameEmailConfig, mainTextFieldsConfig, coachConfig } from 'components/NewDiaryEntry/newDiaryEntryConfig';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'rgb(41, 50, 65)',
  },
  root: {
    color: 'rgba(0, 0, 0, 0.75)',
    backgroundColor: 'rgb(255, 255, 255)',
    padding: '25px',
    maxWidth: '750px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50ch',
    },
    '& .MuiFormControl-root': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
}));

function NewDiaryEntry() {
  const styles = useStyles();
  const [coach, setCoach] = useState('');

  const marks = [
    {
      value: 1,
      label: 'Very Poor',
    },
    {
      value: 2,
      label: 'Poor',
    },
    {
      value: 3,
      label: 'Fair',
    },
    {
      value: 4,
      label: 'Good',
    },
    {
      value: 5,
      label: 'Very Good',
    },
  ];

  return (
    <div className={styles.container}>
      <form className={styles.root}>
        <h1>New Sleep Diary Entry</h1>
        <p>One of the most critical aspects of your success is this sleep diary.
        Please fill it out within 30 minutes of waking so your certified sleep specialist
          has an accurate picture of your progress.</p>

        {nameEmailConfig.map((fieldData) => (
          <TextField required key={fieldData.id} {...fieldData} />
        ))}

        <FormControl required>
          <InputLabel id="sleep-coach">Sleep Coach</InputLabel>
          <Select
            labelId="sleep-coach"
            id="sleep-coach"
            value={coach}
            onChange={(event) => { setCoach(event.target.value) }}
          >
            <MenuItem value=""></MenuItem>
            {coachConfig.map((coachData) => {
              const { id, name } = coachData;
              return <MenuItem key={id} value={name}>{name}</MenuItem>;
            })}
          </Select>
        </FormControl>

        {mainTextFieldsConfig.map((fieldData) => (
          <TextField required key={fieldData.id} {...fieldData} />
        ))}

        <FormControl required component="fieldset">
          <FormLabel component="legend">Did you take any over-the-counter or prescription medication(s) to help you sleep?</FormLabel>
          <RadioGroup row aria-label="Did you take medications for sleep" name="medications-yes-no">
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>

        <TextField id='medications-list' label="If yes, please list:" variant='outlined' />


        <FormControl required component="fieldset">
          <Typography id="discrete-slider" gutterBottom>
            How would you rate the quality of your sleep?
          </Typography>
          <Slider
            defaultValue={3}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={1}
            max={5}
          />
        </FormControl>

        <TextField id='out-of-bed-time' label="Comments (if applicable)" variant='outlined' />

        <Button variant='contained' color='primary'>Submit</Button>
      </form>
    </div>
  )
}

NewDiaryEntry.propTypes = {

}

export default NewDiaryEntry
