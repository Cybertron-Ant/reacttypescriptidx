import { useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { addDroppedItem } from '../dragDropSlice';
import { RootState } from '../store';

export const DropZone: React.FC = () => {
  const dispatch = useDispatch();
  const droppedItems = useSelector((state: RootState) => state.dragDrop.droppedItems);

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'ITEM',
    drop: (item: { ids: string[] }) => {
      item.ids.forEach((id) => {
        dispatch(addDroppedItem(id));
      });
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div
      ref={drop}
      className={`p-6 rounded-lg border-2 border-dashed min-h-[200px] transition-all duration-300
        ${isOver ? 'border-blue-500 bg-blue-50 scale-105' : 'border-gray-300'}
      `}
    >
      <div className="text-center text-gray-500 mb-4">
        {droppedItems.length === 0 ? (
          'Drop items here'
        ) : (
          <div className="space-y-2">
            {droppedItems.map((item, index) => (
              <div key={index} className={`p-2 bg-white rounded shadow transition-all duration-300`}> 
                Item {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
