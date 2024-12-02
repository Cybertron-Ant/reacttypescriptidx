import { useDrag } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { setDraggedItem } from '../dragDropSlice';

interface DraggableItemProps {
  id: string;
  text: string;
}

export const DraggableItem: React.FC<DraggableItemProps> = ({ id, text }) => {
  const dispatch = useDispatch();

  const [{ isDragging }, drag] = useDrag({
    type: 'ITEM',
    item: () => ({ id }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: () => {
      dispatch(setDraggedItem(null));
    },
  });

  return (
    <div
      ref={drag}
      className={`p-4 mb-2 bg-white rounded shadow cursor-move
        ${isDragging ? 'opacity-50' : 'opacity-100'}
        hover:shadow-md transition-all duration-200`}
    >
      {text}
    </div>
  );
};
