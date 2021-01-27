import React from 'react';
// import ReactDOM from 'react-dom';
import styled from 'styled-components';

export default function Form({ values, change, submit, disabled }) {

    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }

    return (
        <StyledFormContainer>
            <form onSubmit={onSubmit}>

                <div>
                    <label>Name:
                        <input
                        type='text'
                        name='name'
                        value={values.name}
                        onChange={onChange}>
                        </input>
                    </label>
                </div>

                <div>
                    <label>Email:
                        <input
                        type='email'
                        name='email'
                        value={values.email}
                        onChange={onChange}>
                        </input>
                    </label>
                </div>

                <div>
                    <label>Password:
                        <input
                        type='password'
                        name='password'
                        value={values.password}
                        onChange={onChange}>
                        </input>
                    </label>
                </div>

                <div>
                    <label>Agree to Terms of Service:
                        <input
                        type='checkbox'
                        name='terms'
                        checked={values.terms}
                        onChange={onChange}>
                        </input>
                    </label>
                </div>

                <button disabled={disabled}>Welcome Aboard!</button>

            </form>
        </StyledFormContainer>
    );
}

//--------------------------BEGIN STYLING---------------------------------//

const StyledFormContainer = styled.div`
    border: solid 1px green;
    margin: 0 auto;
    width: 80%;
    text-align: center;

    input {
        margin: 1%;
    }
`;