# RenderListItem Component Documentation

## Purpose

The `RenderListItem` component renders a list of items, conditionally displaying whether each item is available or unavailable.  It takes an array of `ListItem` objects as input and renders each item as a list item (`<li>`).  Available items are displayed in green, while unavailable items are displayed in red.

## Props

The component accepts the following prop:

*   `items`: An array of `ListItem` objects. Each `ListItem` object has the following properties:
    *   `id`: A unique identifier for the item (number).
    *   `name`: The name of the item (string).
    *   `isAvailable`: A boolean value indicating whether the item is available.

## Usage

```jsx
import RenderListItem from './RenderListItem';

const myItems = [
  { id: 1, name: 'Item 1', isAvailable: true },
  { id: 2, name: 'Item 2', isAvailable: false },
  { id: 3, name: 'Item 3', isAvailable: true },
];

<RenderListItem items={myItems} />;
```

This will render a list with "Item 1" in green, "Item 2" in red, and "Item 3" in green.

## Example

The component iterates through the `items` array and renders each item as a list item.  The styling of the list item changes based on the `isAvailable` property.  If `isAvailable` is true, the item is rendered in green; otherwise, it's rendered in red.
