import styled from "styled-components";


const Divider = styled.div<{$card?: boolean}>`
    border: 1px solid ${props => props.$card ? "#BB9256" : "#4A4A4A"};
    width: 100%;
    margin-top: 10px;
`


export { Divider }