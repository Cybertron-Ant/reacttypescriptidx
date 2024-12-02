# API Documentation

## Components

### DraggableItem

A component that makes its children draggable.

#### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| id | string | Yes | Unique identifier for the draggable item |
| text | string | Yes | Content to be displayed in the draggable item |

#### Usage

```tsx
import { DraggableItem } from './features/dragDrop/components/DraggableItem';

<DraggableItem id="item-1" text="Drag me" />
```

### DropZone

A component that accepts dragged items.

#### Props

This component doesn't accept any props as it manages its state through Redux.

#### Usage

```tsx
import { DropZone } from './features/dragDrop/components/DropZone';

<DropZone />
```

## Redux Store

### State Interface

```typescript
interface DragDropState {
  draggedItem: string | null;
  droppedItems: string[];
}
```

### Actions

#### setDraggedItem

Updates the currently dragged item.

```typescript
function setDraggedItem(itemId: string | null): void
```

#### addDroppedItem

Adds an item to the list of dropped items.

```typescript
function addDroppedItem(itemId: string): void
```

### Selectors

#### Select Dragged Item

```typescript
const draggedItem = useSelector((state: RootState) => state.dragDrop.draggedItem);
```

#### Select Dropped Items

```typescript
const droppedItems = useSelector((state: RootState) => state.dragDrop.droppedItems);
```

## Hooks

### useDrag Configuration

```typescript
const [{ isDragging }, drag] = useDrag({
  type: 'ITEM',
  item: () => ({ id }),
  collect: (monitor) => ({
    isDragging: monitor.isDragging(),
  }),
});
```

### useDrop Configuration

```typescript
const [{ isOver }, drop] = useDrop({
  accept: 'ITEM',
  drop: (item: { id: string }) => {
    dispatch(addDroppedItem(item.id));
  },
  collect: (monitor) => ({
    isOver: monitor.isOver(),
  }),
});
```

## CSS Classes

### DraggableItem

| Class | Description |
|-------|-------------|
| `opacity-50` | Applied while item is being dragged |
| `opacity-100` | Applied when item is not being dragged |
| `cursor-move` | Indicates item is draggable |
| `hover:shadow-md` | Shadow effect on hover |

### DropZone

| Class | Description |
|-------|-------------|
| `border-blue-500` | Applied when item is being dragged over |
| `bg-blue-50` | Background color when item is being dragged over |
| `border-gray-300` | Default border color |

## Types

### RootState

```typescript
type RootState = ReturnType<typeof store.getState>;
```

### AppDispatch

```typescript
type AppDispatch = typeof store.dispatch;
```

## Constants

### Drag Types

```typescript
const ItemTypes = {
  ITEM: 'ITEM',
} as const;
```

## Error Handling

The feature includes built-in error handling for common scenarios:

```typescript
try {
  dispatch(addDroppedItem(itemId));
} catch (error) {
  console.error('Failed to add dropped item:', error);
  // Handle error appropriately
}
```
