import Button from '@/components/ui/button';
import { useStore } from '@/store/';
import { IconPlus } from '@tabler/icons-react';
import { useState } from 'react';

export const AddTodo = () => {
  const [text, setText] = useState('');
  const addTodo = useStore(state => state.addTodo);
  const editMode = useStore(state => state.editMode);

  if (!editMode) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        className="flex-1 rounded border border-gray-300 p-2"
        placeholder="Add a new todo"
      />
      <Button variant="accent" icon={<IconPlus size={24} stroke={1.5} />}>
        Add
      </Button>
    </form>
  );
};
