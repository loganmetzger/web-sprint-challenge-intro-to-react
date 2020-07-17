import React from 'react';
import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    justify-content: ${(props) => props.justify || "center"};
    align-items: ${(props) => props.align || "center"};
    flex-direction: row;
    flex-wrap: wrap;
`