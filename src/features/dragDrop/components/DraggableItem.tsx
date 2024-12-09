import { useDrag } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setDraggedItems, setSelectedItems } from '../dragDropSlice';

interface DraggableItemProps {
  id: string;
  text: string;
}

export const DraggableItem: React.FC<DraggableItemProps> = ({ id, text }) => {
  const dispatch = useDispatch();
  const selectedItems = useSelector((state: RootState) => state.dragDrop.selectedItems);

  const getSelectedItems = () => {
    return selectedItems;
  };

  const handleClick = (itemId: string) => {
    const isSelected = selectedItems.includes(itemId);
    const newSelectedItems = isSelected
      ? selectedItems.filter((itemId: string) => itemId !== id) // Deselect
      : [...selectedItems, id]; // Select
    dispatch(setSelectedItems(newSelectedItems));
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    if (event.ctrlKey || event.shiftKey) {
      handleClick(id);
    } else {
      dispatch(setSelectedItems([id]));
    }
  };

  const [{ isDragging }, drag] = useDrag({
    type: 'ITEM',
    item: () => {
      const selectedItems = getSelectedItems();
      dispatch(setDraggedItems(selectedItems));
      return { ids: selectedItems };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: () => {
      dispatch(setDraggedItems([]));
    },
  });

  return (
    <div
      ref={drag}
      onMouseDown={handleMouseDown}
      className={`p-4 mb-2 bg-white rounded shadow cursor-move transition-all duration-200
        ${isDragging ? 'opacity-50 scale-105' : 'opacity-100'}
        hover:shadow-md`}
    >
      {text}
    </div>
  );
};
