import { InputToDo } from "./InputToDo";
import { ListToDo } from "./ListToDo";
import { UseTodos } from "../Hooks/UseTodos.ts";

export const ToDo = () => {
    const { todos, addTodo, toggleTodo, removeTodo } = UseTodos();
    return (
        <>
            <h1>Este es la lista ToDo</h1>
            <InputToDo onAdd={addTodo}/>
            <ListToDo todos={todos} onToggle={toggleTodo} onDelete={removeTodo}/>
        </>

    )
}