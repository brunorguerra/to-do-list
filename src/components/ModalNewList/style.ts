import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    position: fixed;
    left: 0;
    top: 0;

    visibility: hidden;
    opacity: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.7);
    .modal {
        max-width: 40rem;
        border-radius: 1rem;
        padding: 4rem 3rem;
        background-color: var(--background100);
        text-align: center;

        h2 {
            font-size: 2.5rem;
        }
        .content {
            width: 100%;
            textarea {
                border: 0.3rem solid var(--border);
                background-color: var(--background300);
                border-radius: 0.3rem;

                display: block;
                width: inherit;
                height: 10rem;

                padding: 1rem;
                resize: none;
                font-size: 1.6rem;
            }
            .footer {
                width: inherit;

                display: flex;
                flex-flow: row wrap;
                justify-content: space-between;
                align-items: center;
                gap: 3rem;
            }
        }
    }
    &.actived {
        visibility: visible;
        opacity: 1;
    }
`;
