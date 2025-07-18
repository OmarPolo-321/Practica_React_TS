import { InputToDo } from "./InputToDo.tsx";
import { ListToDo } from "./ListToDo.tsx";
import { UseTodos } from "../../Hooks/UseTodos.ts";

export const ToDo = () => {
    const { todos, addTodo, toggleTodo, removeTodo } = UseTodos();
    console.log("Ejeuta del ToDo input y list")
    return (
        <>
            <h1>Este es la lista ToDo</h1>
            <InputToDo onAdd={addTodo}/>
            <ListToDo todos={todos} onToggle={toggleTodo} onDelete={removeTodo}/>
        </>

    )
}