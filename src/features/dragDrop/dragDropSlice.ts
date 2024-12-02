import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DragDropState {
  draggedItem: string | null;
  droppedItems: string[];
}

const initialState: DragDropState = {
  draggedItem: null,
  droppedItems: [],
};

export const dragDropSlice = createSlice({
  name: 'dragDrop',
  initialState,
  reducers: {
    // Set the currently dragged item
    setDraggedItem: (state, action: PayloadAction<string | null>) => {
      state.draggedItem = action.payload;
    },
    // Add item to dropped items list
    addDroppedItem: (state, action: PayloadAction<string>) => {
      state.droppedItems.push(action.payload);
    },
  },
});

export const { setDraggedItem, addDroppedItem } = dragDropSlice.actions;
export default dragDropSlice.reducer;
