import { useContext } from "react";
import { TasksContext } from "../../contexts/TasksContext";
import { Button } from "../Button";
import { Container } from "./style";

export const ModalNewTask = () => {
    const {
        isActiveModalNewTask,
        setIsActiveModalNewTask,
        valueInputModalNewTask,
        setValueInputModalNewTask,
        addNewTask,
        filledValueInput,
        setFilledValueInput,
        verifyValueLength,
    } = useContext(TasksContext);

    return (
        <Container
            isActiveModal={isActiveModalNewTask}
            filledValueInput={filledValueInput}
        >
            <div className="modal">
                <h2>Nova Tarefa</h2>
                <div className="content">
                    <textarea
                        placeholder="Escreva sua Tarefa"
                        onChange={(e) => {
                            setValueInputModalNewTask(e.target.value);
                            setFilledValueInput(
                                verifyValueLength(e.target.value)
                            );
                        }}
                        value={valueInputModalNewTask}
                    ></textarea>
                    <div className="footer">
                        <Button
                            typeStyle="outlined"
                            onClick={() => setIsActiveModalNewTask(false)}
                        >
                            Cancelar
                        </Button>
                        <Button onClick={() => addNewTask()}>Confirmar</Button>
                    </div>
                </div>
            </div>
        </Container>
    );
};
