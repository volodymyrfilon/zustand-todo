import Button from '@/components/ui/button';
import { useStore } from '@/store';
import { IconEdit, IconEditOff } from '@tabler/icons-react';

export const EditToggler = () => {
  const toggleEditMode = useStore(state => state.toggleEditMode);
  const editMode = useStore(state => state.editMode);

  const iconEditOn = <IconEdit size={32} stroke={1.5} />;
  const iconEditOff = <IconEditOff size={32} stroke={1.5} />;

  return (
    <Button
      className={
        editMode
          ? 'bg-red-500 !ring-red-400 hover:bg-red-500/60'
          : 'bg-green-500 !ring-green-400 hover:bg-green-500/60'
      }
      onClick={toggleEditMode}
      icon={!editMode ? iconEditOn : iconEditOff}
    >
      {editMode ? 'Disable Edit Mode' : 'Enable Edit Mode'}
    </Button>
  );
};
