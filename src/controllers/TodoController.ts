import { Todo } from "../models/Todo";

export class TodoController {
  addTodo(title: string): Todo {
    return {
      id: Date.now().toString(),
      title,
      completed: false,
    };
  }

  toggleTodo(id: string, todos: Todo[]): Todo[] {
    return todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
  }

  removeTodo(id: string, todos: Todo[]): Todo[] {
    return todos.filter(todo => todo.id !== id);
  }
}
