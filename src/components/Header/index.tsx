import { Container } from "./style";
import { IoMdAdd } from "react-icons/io";

interface PropsHeader {
    toggleStateModal: () => void;
}

export const Header = ({ toggleStateModal }: PropsHeader) => {
    return (
        <Container>
            <button onClick={toggleStateModal} title="Nova Tarefa">
                <IoMdAdd size={30} className="iconAdd" />
            </button>
            <h1>Lista de Tarefas</h1>
            <div className="empty"></div>
        </Container>
    );
};
