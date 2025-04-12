import { TodoController } from '../../src/controllers/TodoController';
import { useTodoStore } from '../../src/models/Todo';

describe('TodoController', () => {
  const controller = new TodoController();

  beforeEach(() => {
    useTodoStore.setState({ todos: [] });
  });

  it('adiciona uma tarefa via controller', () => {
    controller.addTodo('Do Controller');
    const todos = controller.getAllTodos();

    expect(todos.length).toBe(1);
    expect(todos[0].title).toBe('Do Controller');
  });

  it('não permite adicionar título vazio', () => {
    expect(() => controller.addTodo('')).toThrow('O título não pode estar vazio');
  });

  it('remove tarefa via controller', () => {
    controller.addTodo('Test');
    const id = controller.getAllTodos()[0].id;

    controller.removeTodo(id);
    expect(controller.getAllTodos().length).toBe(0);
  });
});
