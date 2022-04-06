import styled from "styled-components";

export const Container = styled.div`
    width: min(110rem, 90%);
    margin: 0 auto;
    padding: 2rem;

    .content {
        padding: 3rem 0;
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }
`;
