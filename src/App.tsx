import { useEffect, useState } from "react";
import { Container } from "./App.style";
import { CardList } from "./components/cardList";
import { Header } from "./components/Header";
import { ModalNewList } from "./components/ModalNewList";

interface PropsListTasks {
    task: string;
}

interface PropsInput {
    target: {
        value: string;
    };
}

function App() {
    const [isModalActive, setIsModalActive] = useState(false);
    const [listTasks, setListTasks] = useState<PropsListTasks[]>([]);
    const [valueInput, setValueInput] = useState("");

    function toggleModal() {
        !isModalActive ? setIsModalActive(true) : setIsModalActive(false);
    }

    function getValueTextarea({ target }: PropsInput) {
        setValueInput(target.value);
    }

    function addList() {
        setListTasks([...listTasks, { task: valueInput }]);
        setIsModalActive(false);
    }

    return (
        <Container>
            <Header toggleStateModal={toggleModal} />
            <div className="content">
                {listTasks.map((task) => (
                    <CardList descriptionTask={task.task} />
                ))}
            </div>
            <ModalNewList
                toggleModal={isModalActive}
                closeModal={toggleModal}
                funcChange={getValueTextarea}
                funcClick={addList}
            />
        </Container>
    );
}

export default App;
