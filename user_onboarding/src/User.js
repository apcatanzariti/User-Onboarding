import React from 'react';
// import ReactDOM from 'react-dom';
import styled from 'styled-components';

export default function User ({ details }) {
    return (
        <StyledUserContainer>
        <p><b>Name:</b> {details.name}</p>
        <p><b>Email:</b> {details.email}</p>
        <p><b>Password (for some reason):</b> {details.password}</p>
        <p><b>Accepted Terms of Service?:</b> {details.terms}</p>
        </StyledUserContainer>
    );
};

//--------------------------BEGIN STYLING---------------------------------//

const StyledUserContainer = styled.div`
    border: solid 1px #d36dff;
    margin: 0% 0 3% 0;
    padding: 3%;
    border-radius: 5px;
`;