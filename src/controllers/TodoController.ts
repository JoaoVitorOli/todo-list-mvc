import { useTodoStore, Todo } from '../models/Todo';

export class TodoController {
  getAllTodos(): Todo[] {
    return useTodoStore.getState().todos;
  }

  addTodo(title: string): void {
    if (!title || title.trim() === '') {
      throw new Error('O título não pode estar vazio');
    }
    useTodoStore.getState().addTodo(title.trim());
  }

  toggleTodo(id: string): void {
    useTodoStore.getState().toggleTodo(id);
  }

  removeTodo(id: string): void {
    useTodoStore.getState().removeTodo(id);
  }
}

