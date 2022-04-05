import { Container } from "./style";

interface PropsButton {
    typeStyle?: string;
    children: string;
    func?: () => void;
}

export const Button = ({ typeStyle, children, func }: PropsButton) => {
    return (
        <Container onClick={func} typeStyle={typeStyle}>
            {children}
        </Container>
    );
};
