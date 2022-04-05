import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Container } from "./style";

interface PropsList {
    index: number;
    descriptionTask: string;
    removeTask: (index: number) => void;
}

export const CardList = ({ index, descriptionTask, removeTask }: PropsList) => {
    const [isDone, setIsDone] = useState(false);

    function markDone() {
        isDone ? setIsDone(false) : setIsDone(true);
    }

    return (
        <Container className={isDone ? "doneTask" : ""}>
            <textarea
                placeholder="Sua Tarefa"
                disabled
                value={descriptionTask}
            ></textarea>
            <div className="footer">
                <Button typeStyle="outlined" func={() => removeTask(index)}>
                    Excluir
                </Button>
                {isDone ? (
                    <Button func={markDone}>Desmarcar feito</Button>
                ) : (
                    <Button func={markDone}>Marcar como feito</Button>
                )}
            </div>
        </Container>
    );
};
