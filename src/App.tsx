import { useEffect, useState } from "react";
import { Container } from "./App.style";
import { CardList } from "./components/cardList";
import { Header } from "./components/Header";
import { ModalNewList } from "./components/ModalNewList";
import { PreviewCardList } from "./components/PreviewCardList";

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
        if (valueInput.trim() !== "") {
            setListTasks([...listTasks, { task: valueInput }]);
            setIsModalActive(false);
        }
    }

    function removeList(index: number) {
        const arr = [...listTasks];
        arr.splice(index, 1);
        setListTasks(arr);
    }

    return (
        <Container>
            <Header toggleStateModal={toggleModal} />
            <div className="content">
                {listTasks.length > 0 &&
                    listTasks.map((task, index) => (
                        <CardList
                            descriptionTask={task.task}
                            key={index}
                            index={index}
                            removeTask={removeList}
                        />
                    ))}
                {listTasks.length === 0 && (
                    <PreviewCardList openModal={toggleModal} />
                )}
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
