# ConditionalElementVariable Component

This component renders an HTML element (h1, h2, h3, or p) based on the `elementType` prop and displays the text provided in the `text` prop.

## Props

| Prop          | Type             | Description                                      | Required | Default |
|---------------|-------------------|--------------------------------------------------|----------|---------|
| `elementType` | `'h1' \| 'h2' \| 'h3' \| 'p'` | Type of HTML element to render.                | Yes      |         |
| `text`        | `string`          | The text content to display within the element. | Yes      |         |


## Usage

```jsx
import ConditionalElementVariable from './ConditionalElementVariable';

function MyComponent() {
  return (
    <div>
      <ConditionalElementVariable elementType="h1" text="This is a heading 1" />
      <ConditionalElementVariable elementType="p" text="This is a paragraph." />
      <ConditionalElementVariable elementType="h2" text="This is a heading 2" />
      <ConditionalElementVariable elementType="h3" text="This is a heading 3" />
      <ConditionalElementVariable elementType="invalid" text="This will show an error message" />
    </div>
  );
}
```

### Example
The following code will render an < h1 > element with the text "This is a heading 1":

<ConditionalElementVariable elementType="h1" text="This is a heading 1" />

If an invalid elementType is provided, a < p > element with the text "Invalid element type specified." will be rendered.