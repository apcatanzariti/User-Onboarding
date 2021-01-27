import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';
import * as yup from 'yup';
import Form from './Form';
import User from './User';
import schema from './validation/formSchema';

const initialUsers = [];

const initialValues = {
  name: '',
  email: '',
  password: '',
  terms: false
};

const initialFormErrors = {
  name: '',
  email: '',
  password: ''
};

const initialDisabled = true;

function App() {

  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors, [name]: ''
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors, [name]: err.errors[0]
        });
      });

    setFormValues({
      ...formValues, [name]: value
    });
  };

  useEffect(() => {
    schema.isValid(formValues)
    .then((valid) => {
      setDisabled(!valid);
    })
  }, [formValues]);

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms === true ? 'Yup!' : 'Not yet >:/'
    };
    postNewUser(newUser);
  }

  const postNewUser = (newUser) => {
    axios
    .post('https://reqres.in/api/users', newUser)
    .then((res) => {
      setUsers([...users, res.data]);
      setFormValues(initialValues);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <StyledContainer>
      <Form values={formValues} change={inputChange} submit={formSubmit} disabled={disabled} errors={formErrors}/>
      {
        users.map((user) => {
          return <User details={user}/>
        })
      }
    </StyledContainer>
  );
}

export default App;

//--------------------------BEGIN STYLING---------------------------------//

const StyledContainer = styled.div`
    border: solid 1px red;
    margin: 0 auto;
    width: 80%;
    text-align: center;
`;
