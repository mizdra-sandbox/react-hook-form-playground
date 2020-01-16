import React from 'react';
import { useForm } from 'react-hook-form';

export type AddTodoFormProps = {
  onAdd: (formData: AddTodoFormData) => void;
};

export type AddTodoFormHandler = {
  focusFirst(): void;
  reset(): void;
};

export type AddTodoFormData = {
  name: string;
  comment: string;
};

export const AddTodoForm = React.forwardRef<AddTodoFormHandler, AddTodoFormProps>(function AddTodoForm(
  props: AddTodoFormProps,
  ref,
) {
  const { register, handleSubmit, reset } = useForm<AddTodoFormData>({
    defaultValues: {
      name: 'タスク名',
      comment: 'タスクのコメントです',
    },
  });

  const firstInputEl = React.useRef<HTMLInputElement | null>(null);
  const handleFirstInputRef: React.Ref<HTMLInputElement> = React.useCallback(
    (ref) => {
      register(ref);
      firstInputEl.current = ref;
    },
    [register],
  );

  React.useImperativeHandle(ref, () => ({
    focusFirst: () => {
      firstInputEl.current?.focus();
    },
    reset,
  }));

  return (
    <form onSubmit={handleSubmit(props.onAdd)}>
      <input name="name" ref={handleFirstInputRef} />
      <input name="comment" ref={register} />
      <input type="submit" value="追加" />
    </form>
  );
});
