import { Container } from "./style";
import { IoMdAdd } from "react-icons/io";

interface PropsPreview {
    openModal: () => void;
}

export const PreviewCardList = ({ openModal }: PropsPreview) => {
    return (
        <Container onClick={openModal}>
            <span>
                <IoMdAdd size={20} /> Nova Tarefa
            </span>
        </Container>
    );
};
