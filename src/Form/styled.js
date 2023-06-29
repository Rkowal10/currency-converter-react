import styled, { css } from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-basis: 700px;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    margin: auto;
    font-weight: 500;
`;

export const Fieldset = styled.fieldset`
    border: solid 1px;
    border-radius: 5px;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.color.pearlBush};
`;

export const Legend = styled.legend`
    border: solid 2px;
    border-radius: 5px;
    padding: 8px;
    font-size: x-large;
    background-color: ${({ theme }) => theme.color.pearlBush};
`;

export const Label = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    @media (max-width: ${({theme}) => theme.breakpoint.mobile}px) {
        grid-template-columns: 1fr;
    }
`;

export const LabelText = styled.label`
    padding: 20px;
    font-weight: 600;
`;

export const Input = styled.input` 
    border-radius: 5px;
    border: solid 1px;
    padding: 5px;
    margin-left: 10px;
    text-align: center;

    &:hover {
        background-color: ${({ theme }) => theme.color.silver};
    }
`;

export const Button = styled.button`
    border-radius: 5px;
    border: solid 1px;
    padding: 10px;
    font-weight: 600;
    margin: 15px 5px 5px;

    &:hover {
        background-color: ${({ theme }) => theme.color.silver};
    }
`;

export const Paragraph = styled.p`
    font-size: larger;
    text-align: center;

    ${({ smaller }) => smaller && css`
        font-size: small;
        font-style: italic;
    `}
`;

export const Loading = styled.p`
    color: ${({ theme }) => theme.color.CornflowerBlue};
`;

export const Error = styled.p`
    color: ${({ theme }) => theme.color.crimson};
`;