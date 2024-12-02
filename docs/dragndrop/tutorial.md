# Drag and Drop Tutorial

This tutorial will guide you through using and implementing the drag and drop feature in your React application.

## Table of Contents
- [Getting Started](#getting-started)
- [Basic Implementation](#basic-implementation)
- [Advanced Usage](#advanced-usage)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)

## Getting Started

### Prerequisites
- Node.js 14+
- npm or yarn
- React project with TypeScript

### Installation

1. Install required dependencies:
```bash
npm install @reduxjs/toolkit react-redux react-dnd react-dnd-html5-backend
```

2. Add the feature to your project:
```bash
cp -r src/features/dragDrop your-project/src/features/
```

## Basic Implementation

### 1. Set Up Provider Components

Wrap your app with the necessary providers:

```tsx
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Provider } from 'react-redux';
import { store } from './features/dragDrop/store';

function App() {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        {/* Your app content */}
      </DndProvider>
    </Provider>
  );
}
```

### 2. Create Draggable Items

Use the DraggableItem component:

```tsx
import { DraggableItem } from './features/dragDrop/components/DraggableItem';

function YourComponent() {
  return (
    <DraggableItem id="unique-id" text="Drag me!" />
  );
}
```

### 3. Implement Drop Zone

Add the DropZone component where you want to accept dropped items:

```tsx
import { DropZone } from './features/dragDrop/components/DropZone';

function YourComponent() {
  return (
    <div>
      <h2>Drop Items Here</h2>
      <DropZone />
    </div>
  );
}
```

## Advanced Usage

### Custom Drag Preview

```tsx
import { DraggableItem } from './features/dragDrop/components/DraggableItem';

function CustomDraggable() {
  return (
    <DraggableItem
      id="custom-item"
      text={
        <div className="custom-preview">
          <img src="icon.png" alt="Custom preview" />
          <span>Custom Item</span>
        </div>
      }
    />
  );
}
```

### Accessing Drop State

```tsx
import { useSelector } from 'react-redux';
import { RootState } from './features/dragDrop/store';

function DroppedItems() {
  const items = useSelector((state: RootState) => state.dragDrop.droppedItems);
  
  return (
    <div>
      <h3>Dropped Items:</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
```

## Examples

### Simple List Reordering
```tsx
function ReorderableList() {
  const items = ['Item 1', 'Item 2', 'Item 3'];
  
  return (
    <div className="grid gap-2">
      {items.map((item) => (
        <DraggableItem key={item} id={item} text={item} />
      ))}
      <DropZone />
    </div>
  );
}
```

### Kanban Board Column
```tsx
function KanbanColumn() {
  return (
    <div className="bg-gray-100 p-4 rounded">
      <h3 className="font-bold mb-4">To Do</h3>
      <div className="space-y-2">
        <DraggableItem id="task-1" text="Complete documentation" />
        <DraggableItem id="task-2" text="Review PR" />
      </div>
      <DropZone />
    </div>
  );
}
```

## Troubleshooting

### Common Issues

1. **Items not draggable**
   - Ensure DndProvider is properly set up
   - Check that HTML5Backend is imported
   - Verify item IDs are unique

2. **Drop zone not accepting items**
   - Confirm DropZone component is within DndProvider
   - Check Redux store configuration
   - Verify drop type matches drag type

3. **State not updating**
   - Check Redux DevTools for action dispatch
   - Verify store connection
   - Ensure reducers are properly combined

### Debug Tips

1. Enable Redux DevTools:
```tsx
const store = configureStore({
  reducer: {
    dragDrop: dragDropReducer,
  },
  devTools: true,
});
```

2. Add logging:
```tsx
const [{ isDragging }, drag] = useDrag({
  type: 'ITEM',
  item: () => {
    console.log('Started dragging');
    return { id };
  },
  end: () => {
    console.log('Ended dragging');
  },
});
```
