import type { Task } from '../model/Task';
import { TaskToDo } from './TaskToDo';

interface Props {
  todos: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const ListToDo = ({ todos, onToggle, onDelete } : Props) => {
  return (
    <ul>
      {todos.map(todo => (
        <TaskToDo key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
};
