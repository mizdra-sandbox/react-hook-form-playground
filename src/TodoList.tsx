import React from 'react';
import { Todo } from './types';

export type TodoListProps = {
  values: Todo[];
};

export function TodoList(props: TodoListProps) {
  return (
    <ul>
      {props.values.map((todo, i) => (
        <li key={i}>{JSON.stringify(todo)}</li>
      ))}
    </ul>
  );
}
