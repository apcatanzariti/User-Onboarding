import React from 'react';
// import ReactDOM from 'react-dom';
import styled from 'styled-components';

export default function Form({ values, change, submit, disabled, errors }) {

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
            <h1>New User Form!</h1>
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
                    <StyledErrorDiv>{errors.name}</StyledErrorDiv>
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
                    <StyledErrorDiv>{errors.email}</StyledErrorDiv>
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
                    <StyledErrorDiv>{errors.password}</StyledErrorDiv>
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

                <StyledButton disabled={disabled}>Welcome Aboard!</StyledButton>

            </form>
        </StyledFormContainer>
    );
}

//--------------------------BEGIN STYLING---------------------------------//

const StyledFormContainer = styled.div`
    // border: solid 1px green;
    margin: 0 auto;

    input {
        margin: 1%;
        color: #d36dff;
        padding: 1.5%;
        margin: 2% 0% 2% 1%;
    }

    h1 {
        color: #d36dff;
    }
`;

const StyledButton = styled.button`
    padding: 3%;
    margin-top: 2%;
    border-radius: 5px;
    background-color: white;
    border: solid 2px #d36dff;
    color: #d36dff;
    cursor: pointer;
    transition: .3s;

    :hover {
        background-color: #d36dff;
        color: white;
    }

    ${props => (props.disabled === true ? `color: #b7b7b7; border-color: #b7b7b7; cursor: default; :hover{color: #b7b7b7; border-color: ##b7b7b7; background-color: white;};` : null)}
`;

const StyledErrorDiv = styled.div`
    color: red;
`;