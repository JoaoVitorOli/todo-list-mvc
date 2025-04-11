import { TodoController } from '../../src/controllers/TodoController';
import { Todo } from '../../src/models/Todo';

describe('TodoController', () => {
  let controller: TodoController;
  let mockTodos: Todo[];

  beforeEach(() => {
    controller = new TodoController();
    mockTodos = [
      { id: '1', title: 'Tarefa 1', completed: false },
      { id: '2', title: 'Tarefa 2', completed: true },
    ];
  });

  it('deve adicionar uma nova tarefa', () => {
    const todo = controller.addTodo('Nova Tarefa');
    expect(todo).toHaveProperty('id');
    expect(todo.title).toBe('Nova Tarefa');
    expect(todo.completed).toBe(false);
  });

  it('deve alternar o status de uma tarefa', () => {
    const updated = controller.toggleTodo('1', mockTodos);
    const toggled = updated.find(t => t.id === '1');
    expect(toggled?.completed).toBe(true);
  });

  it('deve remover uma tarefa', () => {
    const updated = controller.removeTodo('2', mockTodos);
    expect(updated.find(t => t.id === '2')).toBeUndefined();
    expect(updated.length).toBe(1);
  });

  it('não deve alterar a lista se o id não for encontrado ao remover', () => {
    const updated = controller.removeTodo('999', mockTodos);
    expect(updated.length).toBe(2);
  });
});
