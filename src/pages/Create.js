import { Button, Container, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import './Create.css';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  title: {
    paddingBottom: 20,
  },
  field: {
    marginBottom: 20,
    display: 'block',
  }
})


const Create = () => {
  const classes = useStyles();
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState('todos');
  const handleSubmit =(e) => {
    setTitleError(false);
    setDetailsError(false);
    if(title === ''){
      setTitleError(true);
    }
    if(details === ''){
      setDetailsError(true);
    }
    e.preventDefault()
    if(title && details){
      fetch('http://localhost:8000/notes',{
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ title, details, category})
      }).then(()=> history.push('/'))
    }
  }
  return (
    <Container>
      <Typography
        variant = "h6"
        component = "h2"
        color="textSecondary"
        gutterBottom
        className = {classes.title}
      >
        Create a New Note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField 
          onChange={(e)=> setTitle(e.target.value)}
          InputProps={{className:classes.field}} 
          label="Note Title" 
          color="secondary" 
          variant="outlined" 
          fullWidth 
          required
          error={titleError} 
        />
        <TextField 
          onChange={(e)=> setDetails(e.target.value)}
          InputProps={{className:classes.field}} 
          label="Details" 
          color="secondary" 
          variant="outlined" 
          multiline
          rows={4}
          fullWidth 
          required
          error={detailsError} 
        />
        
        <FormLabel>Note Category</FormLabel>
        <RadioGroup className={classes.field} value={category} onChange={(e) => setCategory(e.target.value)}>
          <FormControlLabel value="money" control={<Radio color="secondary" />} label="Money" />
          <FormControlLabel value="todos" control={<Radio color="secondary" />} label="Todos" />
          <FormControlLabel value="reminders" control={<Radio color="secondary" />} label="Reminders" />
          <FormControlLabel value="work" control={<Radio color="secondary" />} label="Work" />
        </RadioGroup>
        

        <Button
          variant="contained"
          color="secondary"
          type="submit"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
      
    </Container>
  );
};

export default Create;