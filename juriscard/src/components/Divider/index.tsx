import styled from "styled-components";

export const Divider = styled.div<{$card?: boolean}>`
    border: 1px solid ${props => props.$card ? "#BB9256" : "#4A4A4A"};
    width: 100%;
    margin: 3px 0;
`