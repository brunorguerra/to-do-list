import styled from "styled-components";

interface ContainerProps {
    taskMarked?: boolean;
}

export const Container = styled.div<ContainerProps>`
    width: 33rem;
    border: 0.3rem solid var(--border);
    border-radius: 0.2rem;
    padding: 1rem;
    background: ${(props) =>
        props.taskMarked ? "var(--border)" : "var(--background300)"};
    textarea {
        width: 100%;
        height: 15rem;
        resize: none;
        font-size: 1.6rem;
        color: var(--gray);
        &::placeholder {
            color: var(--gray);
        }
    }
    .footer {
        padding-top: 2rem;
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        gap: 3rem;
        align-items: center;
        justify-content: space-between;
    }
`;
