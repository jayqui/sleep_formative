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

      {nameEmailConfig.map((fieldData) => {
        const { id, label, variant } = fieldData;
        return <TextField key={id} id={id} label={label} variant={variant} />
      })}

      sleep coach

      {mainTextFieldsConfig.map((fieldData) => {
        const { id, label, variant, helperText, InputProps } = fieldData;
        return (<TextField
          key={id}
          id={id}
          label={label}
          variant={variant}
          helperText={helperText}
          InputProps={InputProps}
        />);
      })}


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
    </form>
  )
}

NewDiaryEntry.propTypes = {

}

export default NewDiaryEntry
