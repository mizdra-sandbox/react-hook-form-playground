import React, { useCallback, useState } from 'react';
import { AddTodoForm, AddTodoFormData, AddTodoFormHandler } from './AddTodoForm';
import { Todo } from './types';
import { TodoList } from './TodoList';

export type AppProps = {};

export function App(_props: AppProps) {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const formRef = React.useRef<AddTodoFormHandler>(null);
  const handleAdd = useCallback(
    (formData: AddTodoFormData) => {
      console.log(formData);
      setTodoList([...todoList, formData]);
      formRef.current?.reset();
      formRef.current?.focusFirst();
    },
    [todoList],
  );

  return (
    <div>
      <AddTodoForm ref={formRef} onAdd={handleAdd} />
      <TodoList values={todoList} />
    </div>
  );
}
