import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Provider } from 'react-redux';
import { store } from './features/dragDrop/store';
import { DraggableItem } from './features/dragDrop/components/DraggableItem';
import { DropZone } from './features/dragDrop/components/DropZone';

function App() {
  // Sample items that can be dragged
  const items = [
    { id: '1', text: 'Item 1' },
    { id: '2', text: 'Item 2' },
    { id: '3', text: 'Item 3' },
  ];

  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <div className="min-h-screen bg-gray-100 p-8">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
              Drag and Drop Demo
            </h1>
            
            <div className="grid grid-cols-2 gap-8">
              {/* Draggable items section */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">
                  Draggable Items
                </h2>
                {items.map((item) => (
                  <DraggableItem key={item.id} id={item.id} text={item.text} />
                ))}
              </div>

              {/* Drop zone section */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">
                  Drop Zone
                </h2>
                <DropZone />
              </div>
            </div>
          </div>
        </div>
      </DndProvider>
    </Provider>
  );
}

export default App;
