# Tutorial: Building Dialog Components with Composition and Inheritance

This tutorial will guide you through creating reusable dialog components using both composition and inheritance patterns in React with TypeScript.

## Prerequisites
- Basic knowledge of React and TypeScript
- Node.js and npm installed
- A React project with TypeScript and Tailwind CSS configured

## Step 1: Setting Up the Project Structure

1. Create the following directory structure:
```bash
mkdir -p src/components/{inheritance,composition,shared}
```

2. Create the necessary files:
```bash
touch src/components/shared/types.ts
touch src/components/inheritance/{BaseDialog,ConfirmDialog}.tsx
touch src/components/composition/Dialog.tsx
```

## Step 2: Define Shared Types

Create `types.ts` with shared interfaces:

```typescript
// src/components/shared/types.ts
export interface DialogProps {
  title: string;
  content: string;
  onClose: () => void;
}

export interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}
```

## Step 3: Implementing the Inheritance Pattern

### 1. Create the Base Dialog

```typescript
// src/components/inheritance/BaseDialog.tsx
import React from 'react';
import { DialogProps } from '../shared/types';

class BaseDialog extends React.Component<DialogProps> {
  protected renderHeader() {
    return (
      <div className="bg-gray-100 px-4 py-2 border-b">
        <h2 className="text-lg font-semibold">{this.props.title}</h2>
      </div>
    );
  }

  protected renderContent() {
    return (
      <div className="p-4">
        <p>{this.props.content}</p>
      </div>
    );
  }

  protected renderFooter() {
    return (
      <div className="bg-gray-50 px-4 py-3 border-t flex justify-end">
        <button
          onClick={this.props.onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
          {this.renderHeader()}
          {this.renderContent()}
          {this.renderFooter()}
        </div>
      </div>
    );
  }
}

export default BaseDialog;
```

### 2. Create the Confirm Dialog

```typescript
// src/components/inheritance/ConfirmDialog.tsx
import React from 'react';
import BaseDialog from './BaseDialog';
import { DialogProps } from '../shared/types';

interface ConfirmDialogProps extends DialogProps {
  onConfirm: () => void;
}

class ConfirmDialog extends BaseDialog {
  declare props: ConfirmDialogProps;

  protected renderFooter() {
    return (
      <div className="bg-gray-50 px-4 py-3 border-t flex justify-end space-x-2">
        <button
          onClick={this.props.onClose}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Cancel
        </button>
        <button
          onClick={this.props.onConfirm}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Confirm
        </button>
      </div>
    );
  }
}

export default ConfirmDialog;
```

## Step 4: Implementing the Composition Pattern

Create the composable dialog components:

```typescript
// src/components/composition/Dialog.tsx
import React from 'react';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        {children}
      </div>
    </div>
  );
};

export const DialogHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-gray-100 px-4 py-2 border-b">{children}</div>
);

export const DialogContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="p-4">{children}</div>
);

export const DialogFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-gray-50 px-4 py-3 border-t flex justify-end space-x-2">
    {children}
  </div>
);

export default Dialog;
```

## Step 5: Using the Components

Update your App.tsx to use both patterns:

```typescript
import React, { useState } from 'react';
import ConfirmDialog from './components/inheritance/ConfirmDialog';
import Dialog, {
  DialogHeader,
  DialogContent,
  DialogFooter,
} from './components/composition/Dialog';

function App() {
  const [showInheritanceDialog, setShowInheritanceDialog] = useState(false);
  const [showCompositionDialog, setShowCompositionDialog] = useState(false);

  return (
    <div className="p-8">
      {/* Inheritance Example */}
      <button
        onClick={() => setShowInheritanceDialog(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Show Inheritance Dialog
      </button>

      {showInheritanceDialog && (
        <ConfirmDialog
          title="Inheritance Example"
          content="This dialog uses inheritance"
          onClose={() => setShowInheritanceDialog(false)}
          onConfirm={() => {
            alert('Confirmed!');
            setShowInheritanceDialog(false);
          }}
        />
      )}

      {/* Composition Example */}
      <button
        onClick={() => setShowCompositionDialog(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded ml-4"
      >
        Show Composition Dialog
      </button>

      <Dialog
        isOpen={showCompositionDialog}
        onClose={() => setShowCompositionDialog(false)}
      >
        <DialogHeader>
          <h2 className="text-lg font-semibold">Composition Example</h2>
        </DialogHeader>
        <DialogContent>
          <p>This dialog uses composition</p>
        </DialogContent>
        <DialogFooter>
          <button
            onClick={() => setShowCompositionDialog(false)}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              alert('Confirmed!');
              setShowCompositionDialog(false);
            }}
            className="bg-green-500 text-white px-4 py-2 rounded ml-2"
          >
            Confirm
          </button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default App;
```

## Step 6: Testing the Implementation

1. Start your development server:
```bash
npm start
```

2. Test both dialogs:
   - Click "Show Inheritance Dialog" to see the inheritance-based implementation
   - Click "Show Composition Dialog" to see the composition-based implementation

## Exercises

1. **Extend the Inheritance Pattern:**
   - Create a new dialog type that extends `BaseDialog`
   - Add new functionality like a custom header or content area

2. **Enhance the Composition Pattern:**
   - Create new dialog subcomponents (e.g., `DialogTitle`, `DialogButton`)
   - Implement different dialog variants using composition

3. **Add Animations:**
   - Add enter/exit animations to both dialog implementations
   - Compare how animations can be implemented in both patterns

## Next Steps

1. Add TypeScript strict mode and improve type safety
2. Implement accessibility features (focus trapping, keyboard navigation)
3. Add unit tests for both implementations
4. Create more specialized dialog variants
5. Add documentation for props and methods
