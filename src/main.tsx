import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TasksProvider } from "./contexts/TasksContext";
import { GlobalStyle } from "./Global";

ReactDOM.render(
    <React.StrictMode>
        <TasksProvider>
            <GlobalStyle />
            <App />
        </TasksProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
