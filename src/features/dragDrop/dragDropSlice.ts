import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DragDropState {
  draggedItems: string[];
  droppedItems: string[];
  selectedItems: string[];
}

const initialState: DragDropState = {
  draggedItems: [],
  droppedItems: [],
  selectedItems: [],
};

export const dragDropSlice = createSlice({
  name: 'dragDrop',
  initialState,
  reducers: {
    setDraggedItems: (state, action: PayloadAction<string[]>) => {
      state.draggedItems = action.payload;
    },
    addDroppedItem: (state, action: PayloadAction<string>) => {
      state.droppedItems.push(action.payload);
    },
    setSelectedItems: (state, action: PayloadAction<string[]>) => {
      state.selectedItems = action.payload;
    },
  },
});

export const { setDraggedItems, addDroppedItem, setSelectedItems } = dragDropSlice.actions;
export default dragDropSlice.reducer;
