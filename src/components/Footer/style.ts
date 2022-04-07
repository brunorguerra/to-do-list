import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    padding: 2rem 0;
    text-align: center;
    p {
        font-size: 1.6rem;
        color: var(--gray);
        a {
            color: var(--blue);
            &:hover {
                text-decoration: underline;
            }
        }
    }
`;
