import { create } from 'zustand';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

interface TodoState {
  todos: Todo[];

  addTodo: (title: string) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
  updateTodo: (id: string, updates: Partial<Todo>) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [
    {
      id: '1',
      title: 'Aprender React Native',
      completed: false,
      createdAt: new Date(),
    },
    {
      id: '2',
      title: 'Implementar padrão MVC com Zustand',
      completed: false,
      createdAt: new Date(),
    },
  ],

  addTodo: (title) => set((state) => ({
    todos: [
      ...state.todos,
      {
        id: Date.now().toString(),
        title,
        completed: false,
        createdAt: new Date(),
      }
    ]
  })),

  toggleTodo: (id) => set((state) => ({
    todos: state.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  })),

  removeTodo: (id) => set((state) => ({
    todos: state.todos.filter(todo => todo.id !== id)
  })),

  updateTodo: (id, updates) => set((state) => ({
    todos: state.todos.map(todo =>
      todo.id === id ? { ...todo, ...updates } : todo
    )
  })),
}));
