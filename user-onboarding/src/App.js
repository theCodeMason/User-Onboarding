import React, { useState } from 'react';
import Magicform from './components/form';
import axios from 'axios';
import './App.css'

import * as yup from 'yup';
import schema from './formSchema';

const defaultFormVals = {
  username: '',
  password: '',
  email: '',
  tos: false
}

const defaultFormErrors = {
  username: '',
  password: '',
  email: '',
  tos: ''
}

function App() {
  const [formValues, setFormValues] = useState(defaultFormVals);
  const [formErrors, setFormErrors] = useState(defaultFormErrors);
  const [users, setUsers] = useState([])

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value});
  }

  const handleSubmit = () => {
    axios.post('https://reqres.in/api/users', formValues)
      .then(res => {
        setUsers([res.data, ...users])
    })
      .catch(err => console.error(err))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: '' }))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0] }))
  }

  return (
    <div className="App">
      <Magicform values={formValues} change={handleChange} errors={formErrors} submit={handleSubmit}/>
      {users.map(user => (
        <div key={user.id}>
          <p> NEW USER CREATED AT</p>
          <p>
            {user.createdAt}
          </p>
          <p> NEW USER EMAIL IS: </p>
          <p>
            {user.email}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
