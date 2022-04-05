import { Button } from "../Button";
import { Container } from "./style";

interface PropsModal {
    toggleModal: boolean;
    closeModal: () => void;
    funcChange: ({}: PropsInput) => void;
    funcClick: () => void;
}

interface PropsInput {
    target: {
        value: string;
    };
}

export const ModalNewList = ({
    toggleModal,
    closeModal,
    funcChange,
    funcClick,
}: PropsModal) => {
    return (
        <Container className={toggleModal ? "actived" : ""}>
            <div className="modal">
                <h2>Nova Tarefa</h2>
                <div className="content">
                    <textarea
                        onChange={(e) => funcChange(e)}
                        placeholder="Escreva sua Tarefa"
                    ></textarea>
                    <div className="footer">
                        <Button typeStyle="outlined" func={closeModal}>
                            Cancelar
                        </Button>
                        <Button func={funcClick}>Confirmar</Button>
                    </div>
                </div>
            </div>
        </Container>
    );
};
