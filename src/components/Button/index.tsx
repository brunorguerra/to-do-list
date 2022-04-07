import { Container } from "./style";

interface PropsButton {
    typeStyle?: string;
    children: string;
    onClick?: () => void;
}

export const Button = ({ typeStyle, children, onClick }: PropsButton) => {
    return (
        <Container onClick={onClick} typeStyle={typeStyle}>
            {children}
        </Container>
    );
};
