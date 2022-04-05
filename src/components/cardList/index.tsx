import { Button } from "../Button";
import { Container } from "./style";

interface PropsList {
    descriptionTask: string;
}

export const CardList = ({ descriptionTask }: PropsList) => {
    return (
        <Container>
            <textarea
                placeholder="Sua Tarefa"
                value={`${descriptionTask}`}
            ></textarea>
            <div className="footer">
                <Button typeStyle="outlined">Excluir</Button>
                <Button>Marcar como feito</Button>
            </div>
        </Container>
    );
};
