import styled from "styled-components";

interface PropsButton {
    typeStyle?: string;
}

export const Container = styled.button<PropsButton>`
    border: 0.3rem solid transparent;
    border-radius: 0.5rem;
    border-color: ${(props) =>
        props.typeStyle === "outlined"
            ? "rgba(44, 136, 217, 0.5)"
            : "var(--blue)"};

    font-size: 1.6rem;
    font-weight: 500;

    padding: 1rem 2rem;

    transition: all 0.25s ease;
    overflow: hidden;

    background-color: ${(props) =>
        props.typeStyle === "outlined"
            ? "var(--background100)"
            : "var(--blue)"};
    color: ${(props) =>
        props.typeStyle === "outlined" ? "var(--blue)" : "var(--white)"};

    &:hover {
        ${(props) => props.typeStyle !== "outlined" && "opacity: 0.7"}

        ${(props) =>
            props.typeStyle === "outlined" &&
            "background-color: rgba(44, 136, 217, 0.65);"}

        ${(props) => props.typeStyle === "outlined" && "color: var(--white);"}
    }
`;
