import { useState } from 'react';

const useForm = (initialValue) => {
  
  const [ state, setState ] = useState({});

  const handleSubmit = (event) => {
    if(event) {
      event.preventDefault();
    }
    initialValue;
    console.log(state)
  }

  const handleInputChange = (event) => {
    event.persist();
    setState(state => ({...state, [event.target.name]: event.target.value}));
  }

  return [
    state,
    setState,
    handleInputChange,
    handleSubmit
  ]
}

export default useForm;