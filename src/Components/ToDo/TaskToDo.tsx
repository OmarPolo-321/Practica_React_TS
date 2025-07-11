import { memo } from 'react';
import type { Task } from '../../model/Task';

interface Props {
  todo: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskToDo = memo(({ todo, onToggle, onDelete }:Props) => {
  console.log("Renderiza:", todo.text); // útil para ver qué se actualiza
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
      {todo.text}
      <button onClick={() => onDelete(todo.id)}>Eliminar</button>
    </li>
  );
});
