import styled from "styled-components";

export const Container = styled.div`
    width: min(110rem, 90%);
    background-color: var(--background100);
    border-radius: 0.5rem;
    box-shadow: 0 0 10rem #ccc;
    margin: 3rem auto;
    padding: 2rem;

    .content {
        margin-top: 2rem;
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }
`;
