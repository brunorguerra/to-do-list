import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 100%;

    padding: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        font-size: 3rem;
        color: var(--gray);
    }
    button {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        border: 0.1rem solid #ccc;
        box-shadow: 0 0 2rem #ccc;
        transition: all 0.2s ease;
        .iconAdd {
            transition: all 0.1s ease;
            color: var(--gray);
        }
        &:hover {
            box-shadow: 0 0 2rem #bababa;
        }
        &:active .iconAdd {
            transform: scale(1.1);
        }
    }
`;
