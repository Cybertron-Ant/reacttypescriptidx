# Composition vs Inheritance in React

## Overview
This documentation covers the implementation of both composition and inheritance patterns in React with TypeScript. The example demonstrates how to build reusable dialog components using both approaches, highlighting the strengths and trade-offs of each pattern.

## Project Structure
```
src/
├── components/
│   ├── inheritance/
│   │   ├── BaseDialog.tsx    # Base dialog class
│   │   └── ConfirmDialog.tsx # Extended dialog with confirmation
│   ├── composition/
│   │   └── Dialog.tsx        # Composable dialog components
│   └── shared/
│       └── types.ts          # Shared TypeScript interfaces
└── App.tsx                   # Main application component
```

## Components

### Inheritance Pattern

#### BaseDialog
The `BaseDialog` component serves as the parent class for dialog components, providing basic dialog functionality.

**Key Features:**
- Reusable dialog structure
- Protected methods for header, content, and footer
- TypeScript support with `DialogProps` interface

```typescript
class BaseDialog extends React.Component<DialogProps> {
  protected renderHeader() { ... }
  protected renderContent() { ... }
  protected renderFooter() { ... }
  render() { ... }
}
```

#### ConfirmDialog
Extends `BaseDialog` to create a specialized dialog with confirmation functionality.

**Key Features:**
- Inherits base dialog structure
- Overrides footer to add confirmation button
- Extends props interface for confirmation handler

### Composition Pattern

#### Dialog Components
A set of smaller, focused components that can be composed together:

1. **Dialog**: Main container component
   ```typescript
   const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, children })
   ```

2. **DialogHeader**: Reusable header component
   ```typescript
   export const DialogHeader: React.FC<DialogHeaderProps>
   ```

3. **DialogContent**: Content container component
   ```typescript
   export const DialogContent: React.FC<DialogContentProps>
   ```

4. **DialogFooter**: Footer component for actions
   ```typescript
   export const DialogFooter: React.FC<DialogFooterProps>
   ```

## Type Definitions

### Shared Types
Located in `shared/types.ts`:

```typescript
interface DialogProps {
  title: string;
  content: string;
  onClose: () => void;
}

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}
```

## Pattern Comparison

### Inheritance
**Advantages:**
- Clear hierarchical relationship
- Code reuse through extension
- Predictable method override pattern

**Disadvantages:**
- Tight coupling between parent and child
- Less flexible than composition
- Can lead to deep inheritance chains

### Composition
**Advantages:**
- More flexible and reusable
- Loose coupling between components
- Easier to modify and extend
- Better separation of concerns

**Disadvantages:**
- May require more initial setup
- Can be more verbose

## Usage Examples

### Using Inheritance-based Dialog
```typescript
<ConfirmDialog
  title="Inheritance Example"
  content="This dialog extends a base dialog component."
  onClose={() => setShowDialog(false)}
  onConfirm={() => handleConfirm()}
/>
```

### Using Composition-based Dialog
```typescript
<Dialog isOpen={showDialog} onClose={() => setShowDialog(false)}>
  <DialogHeader>
    <h2>Composition Example</h2>
  </DialogHeader>
  <DialogContent>
    <p>This dialog is built using composition.</p>
  </DialogContent>
  <DialogFooter>
    <button onClick={() => setShowDialog(false)}>Close</button>
  </DialogFooter>
</Dialog>
```

## Best Practices

1. **When to Use Inheritance:**
   - When you have a clear "is-a" relationship
   - When the base component provides a lot of reusable functionality
   - When you want to enforce a specific structure

2. **When to Use Composition:**
   - When you need more flexibility
   - When components share some but not all features
   - When you want to avoid tight coupling

## Styling

The components use Tailwind CSS for styling, providing:
- Responsive design
- Consistent look and feel
- Easy customization
- Dark overlay for dialogs
- Smooth transitions and hover effects

## Performance Considerations

1. **Inheritance Pattern:**
   - Larger bundle size for base components
   - Less memory usage for multiple instances
   - Potential for unused inherited methods

2. **Composition Pattern:**
   - Smaller, more focused components
   - Better tree-shaking potential
   - More flexibility for code splitting
