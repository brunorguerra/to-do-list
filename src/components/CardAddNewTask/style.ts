import styled from "styled-components";

export const Container = styled.div`
    width: 33rem;
    height: 24.5rem;

    background-color: rgba(195, 207, 217, 0.22);
    border: 0.3rem dashed rgba(44, 136, 217, 0.5);

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.6rem;
        font-weight: 500;
        color: var(--blue);
        transition: all 0.2s ease;
    }
    &:hover {
        span {
            transform: scale(1.05);
        }
    }
`;
