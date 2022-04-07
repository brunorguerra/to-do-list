import { useContext } from "react";
import { TasksContext } from "../../contexts/TasksContext";
import { Button } from "../Button";
import { Container } from "./style";

interface TaskProps {
    indexTask: number;
    description?: string;
}

export const CardTask = ({ description, indexTask }: TaskProps) => {
    const { tasksList, deleteTask, setMarkTask, setValueInputModalNewTask } =
        useContext(TasksContext);

    return (
        <Container taskMarked={tasksList[indexTask].taskDone}>
            <textarea
                placeholder="Sua Tarefa"
                disabled
                value={description}
            ></textarea>
            <div className="footer">
                <Button
                    typeStyle="outlined"
                    onClick={() => deleteTask(indexTask)}
                >
                    Excluir
                </Button>

                {tasksList[indexTask].taskDone ? (
                    <Button onClick={() => setMarkTask(indexTask, false)}>
                        Desmarcar feito
                    </Button>
                ) : (
                    <Button onClick={() => setMarkTask(indexTask, true)}>
                        Marcar como feito
                    </Button>
                )}
            </div>
        </Container>
    );
};
