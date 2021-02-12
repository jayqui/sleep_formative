export const nameEmailConfig = [
  {
    id: 'Name',
    label: 'Name',
    variant: 'outlined',
  },
  {
    id: 'Email',
    label: 'Email',
    variant: 'outlined',
  },
];

export const coachConfig = [
  {
    id: 1,
    name: "Coach One",
  },
  {
    id: 2,
    name: "Coach Two",
  },
  {
    id: 3,
    name: "Coach Three",
  },
];

export const mainTextFieldsConfig = [
  {
    id: 'CurrentTime',
    label: "Current Time",
    type: 'time',
    variant: 'outlined',
  },
  {
    id: 'TodaysDate',
    label: "Today's Date",
    type: 'date',
    variant: 'outlined',
  },
  {
    id: 'nap-or-doze-count',
    label: "How many times did you nap or doze yesterday?",
    InputProps: { inputProps: { max: 100, min: 0, } },
    type: 'number',
    variant: 'outlined',
  },
  {
    id: 'nap-or-doze-duration',
    label: "In total, how many minutes did you nap or doze?",
    helperText: "Please enter the total number of minutes you napped yesterday. For example, enter 45 if you took a 30-minute nap AND a 15-minute nap.",
    InputProps: { inputProps: { min: 0, max: 100 } },
    type: 'number',
    variant: 'outlined',
  },
  {
    id: 'bed-entry-last-night',
    label: "What time did you get into bed last night?",
    helperText: "Midnight = 12:00 AM",
    type: 'time',
    variant: 'outlined',
  },
  {
    id: 'time-tried-sleep',
    label: "What time did you try to go to sleep?",
    helperText: 'Midnight = 12:00 AM',
    type: 'time',
    variant: 'outlined',
  },
  {
    id: 'fall-asleep-duration',
    label: "How long did it take you to fall asleep?",
    helperText: 'Please enter the time it took you to fall asleep in minutes.',
    type: 'number',
    InputProps: { inputProps: { min: 0, max: 1000 } },
    variant: 'outlined',
  },
  {
    id: 'awakenings-count',
    label: 'How many times did you wake up, not counting your final awakening?',
    type: 'number',
    InputProps: { inputProps: { min: 0, max: 100 } },
    variant: 'outlined',
  },
  {
    id: 'awakenings-duration',
    label: "In total, how many minutes did these awakenings last?",
    helperText: 'Please enter the total number of minutes these awakenings lasted. For example, enter 80 if you were awake 4 times for 20-minutes each time.',
    type: 'number',
    InputProps: { inputProps: { min: 0, max: 1000 } },
    variant: 'outlined',
  },
  {
    id: 'final-awakening-time',
    label: "What time was your final awakening?",
    helperText: 'Please double check the AM/PM selected.',
    type: 'number',
    variant: 'outlined',
  },
  {
    id: 'out-of-bed-time',
    label: "What time did you get out of bed for the day?",
    helperText: 'Please double check the AM/PM selected.',
    type: 'number',
    variant: 'outlined',
  },
];
