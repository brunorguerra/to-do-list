import { createContext, ReactNode, useEffect, useState } from "react";

type TasksContextType = {
    isActiveModalNewTask: boolean;
    setIsActiveModalNewTask: (newState: boolean) => void;
    tasksList: TasksListProps[];
    setTasksList: (newState: []) => void;
    deleteTask: (index: number) => void;
    setMarkTask: (index: number, value: boolean) => void;
    valueInputModalNewTask: string;
    setValueInputModalNewTask: (newState: string) => void;
    addNewTask: () => void;
    openModalNewTask: () => void;
    filledValueInput: boolean;
    setFilledValueInput: (newState: boolean) => void;
    verifyValueLength: (value: string) => boolean;
};

interface TasksProviderProps {
    children: ReactNode;
}

interface TasksListProps {
    id: number;
    description: string;
    taskDone: boolean;
}

const initialValue = {
    isActiveModalNewTask: false,
    setIsActiveModalNewTask: () => {},
    tasksList: [{ id: 0, description: "", taskDone: false }],
    setTasksList: () => [],
    deleteTask: () => {},
    setMarkTask: () => {},
    valueInputModalNewTask: "",
    setValueInputModalNewTask: () => {},
    addNewTask: () => {},
    openModalNewTask: () => {},
    filledValueInput: true,
    setFilledValueInput: () => {},
    verifyValueLength: () => true || false,
};

export const TasksContext = createContext<TasksContextType>(initialValue);

export const TasksProvider = ({ children }: TasksProviderProps) => {
    const [isActiveModalNewTask, setIsActiveModalNewTask] = useState(
        initialValue.isActiveModalNewTask
    );
    const [tasksList, setTasksList] = useState(initialValue.tasksList);
    const [valueInputModalNewTask, setValueInputModalNewTask] = useState(
        initialValue.valueInputModalNewTask
    );
    const [filledValueInput, setFilledValueInput] = useState(
        initialValue.filledValueInput
    );

    function deleteTask(index: number) {
        let newList = [...tasksList];
        newList.splice(index, 1);
        setTasksList(newList);
    }

    function setMarkTask(index: number, value: boolean) {
        let newList = [...tasksList];
        let selectObject = newList[index];
        selectObject.taskDone = value;
        newList.splice(index, 1, selectObject);
        setTasksList(newList);
    }

    function openModalNewTask() {
        setIsActiveModalNewTask(true);
        setValueInputModalNewTask("");
        setFilledValueInput(true);
    }

    function addNewTask() {
        if (verifyValueLength(valueInputModalNewTask)) {
            let id = tasksList.length || 0;
            setTasksList([
                ...tasksList,
                {
                    id: id,
                    description: valueInputModalNewTask,
                    taskDone: false,
                },
            ]);
            setIsActiveModalNewTask(false);
        } else {
            setFilledValueInput(false);
        }
    }

    function verifyValueLength(value: string) {
        return value.trim().length > 0 ? true : false;
    }

    useEffect(() => setTasksList([]), []);

    return (
        <TasksContext.Provider
            value={{
                isActiveModalNewTask,
                setIsActiveModalNewTask,
                tasksList,
                setTasksList,
                deleteTask,
                setMarkTask,
                valueInputModalNewTask,
                setValueInputModalNewTask,
                addNewTask,
                openModalNewTask,
                filledValueInput,
                setFilledValueInput,
                verifyValueLength,
            }}
        >
            {children}
        </TasksContext.Provider>
    );
};
