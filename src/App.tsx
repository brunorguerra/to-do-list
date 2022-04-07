import { Container } from "./App.style";
import { CardTask } from "./components/CardTask";
import { Header } from "./components/Header";
import { ModalNewTask } from "./components/ModalNewTask";
import { CardAddNewTask } from "./components/CardAddNewTask";
import { useContext } from "react";
import { TasksContext } from "./contexts/TasksContext";
import { Footer } from "./components/Footer";

function App() {
    const { tasksList } = useContext(TasksContext);

    return (
        <Container>
            <Header />
            <div className="content">
                <CardAddNewTask />
                {tasksList.map((task, index) => (
                    <CardTask
                        key={index}
                        description={task.description}
                        indexTask={index}
                    />
                ))}
            </div>
            <Footer />
            <ModalNewTask />
        </Container>
    );
}

export default App;
