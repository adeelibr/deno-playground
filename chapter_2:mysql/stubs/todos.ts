import { v4 } from "https://deno.land/std/uuid/mod.ts";
// interface
import Todo from '../interfaces/Todo.ts';

let todos: Todo[] = [
  {
    id: v4.generate(),
    todo: 'walk dog',
    isCompleted: true,
  },
  {
    id: v4.generate(),
    todo: 'eat food',
    isCompleted: false,
  },
  {
    id: v4.generate(),
    todo: 'exercise',
    isCompleted: true,
  },
  {
    id: v4.generate(),
    todo: 'read a book',
    isCompleted: false,
  }
];

export default todos;