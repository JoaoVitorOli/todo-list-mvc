import { useTodoStore } from '../../src/models/Todo';

describe('Todo Store (Zustand)', () => {
  beforeEach(() => {
    useTodoStore.setState({ todos: [] });
  });

  it('adiciona uma nova tarefa', () => {
    useTodoStore.getState().addTodo('Nova Tarefa');
    const todos = useTodoStore.getState().todos;

    expect(todos.length).toBe(1);
    expect(todos[0].title).toBe('Nova Tarefa');
    expect(todos[0].completed).toBe(false);
  });

  it('marca uma tarefa como concluída', () => {
    useTodoStore.getState().addTodo('Tarefa');
    const id = useTodoStore.getState().todos[0].id;

    useTodoStore.getState().toggleTodo(id);
    const todo = useTodoStore.getState().todos[0];

    expect(todo.completed).toBe(true);
  });

  it('remove uma tarefa', () => {
    useTodoStore.getState().addTodo('Remover essa');
    const id = useTodoStore.getState().todos[0].id;

    useTodoStore.getState().removeTodo(id);
    expect(useTodoStore.getState().todos.length).toBe(0);
  });
});
