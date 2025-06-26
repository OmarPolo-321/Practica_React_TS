import { useCallback, useState } from 'react';
import type { Task } from '../model/Task.ts'

export const UseTodos = () => {
  const [todos, setTodos] = useState<Task[]>([]);

  const addTodo = useCallback((text: string) => {
    const newTask: Task = {
      id: text,
      text,
      completed: false,
    };
    setTodos(prev => [...prev, newTask]);
  },[]);

  const toggleTodo = useCallback((id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  },[]);

  const removeTodo = useCallback((id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  },[]);

  return { todos, addTodo, toggleTodo, removeTodo };
};
