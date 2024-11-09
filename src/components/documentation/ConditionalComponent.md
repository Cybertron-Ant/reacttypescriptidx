# ConditionalComponent

This component demonstrates conditional rendering in React using TypeScript.  It renders either a `Fruits` component or a `Hello` component based on the `renderFruits` prop.

## Props

| Prop Name       | Type                 | Description                                                              |
|-----------------|----------------------|--------------------------------------------------------------------------|
| `renderFruits` | `boolean`             | If `true`, renders the `Fruits` component; otherwise, renders the `Hello` component. |


## Usage

```jsx
<ConditionalComponent renderFruits={true} />  {/* Renders Fruits */}
<ConditionalComponent renderFruits={false} /> {/* Renders Hello */}

Example Data
The component uses example data for both the Fruits and Hello components:

Fruits: ["Apple", "Banana", "Cherry", "Date", "Elderberry"]
Hello: greeting = "Hello from the ConditionalComponent!";, number = 123;
This component showcases a basic but effective way to conditionally render different components based on prop values.  This is useful for creating dynamic and responsive user interfaces.