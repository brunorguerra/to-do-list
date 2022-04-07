import { Container } from "./style";
import { IoMdAdd } from "react-icons/io";
import { useContext } from "react";
import { TasksContext } from "../../contexts/TasksContext";

export const CardAddNewTask = () => {
    const { openModalNewTask } = useContext(TasksContext);
    return (
        <Container onClick={openModalNewTask}>
            <span>
                <IoMdAdd size={20} /> Nova Tarefa
            </span>
        </Container>
    );
};
