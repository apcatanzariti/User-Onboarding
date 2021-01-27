import React from 'react';
// import ReactDOM from 'react-dom';
import styled from 'styled-components';

export default function User ({ details }) {
    return (
        <StyledUserContainer>
        <p>Name: {details.name}</p>
        <p>Email: {details.email}</p>
        <p>Password (for some reason): {details.password}</p>
        <p>Accepted Terms of Service?: {details.terms}</p>
        </StyledUserContainer>
    );
};

//--------------------------BEGIN STYLING---------------------------------//

const StyledUserContainer = styled.div`
    border: solid 1px blue;
    margin: 0 auto;
    width: 80%;
    text-align: center;
`;