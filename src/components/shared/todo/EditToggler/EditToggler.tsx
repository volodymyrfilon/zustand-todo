import Button from '@/components/ui/button';
import { useStore } from '@/store';
import { classNameProps } from '@/types/className';
import { IconEdit, IconEditOff } from '@tabler/icons-react';

export const EditToggler = ({ className }: classNameProps) => {
  const toggleEditMode = useStore(state => state.toggleEditMode);
  const editMode = useStore(state => state.editMode);

  const iconEditOn = <IconEdit size={20} stroke={1.5} />;
  const iconEditOff = <IconEditOff size={20} stroke={1.5} />;

  return (
    <Button
      className={`${className} ${editMode ? '!bg-red-500 !ring-red-400 hover:!bg-red-700' : ''}`}
      onClick={toggleEditMode}
      variant="secondary"
      ariaLabel="Toggle edit mode"
      icon={!editMode ? iconEditOn : iconEditOff}
    >
      {editMode ? 'Disable Edit Mode' : 'Enable Edit Mode'}
    </Button>
  );
};
