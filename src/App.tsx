import React, { useState } from 'react';
import './styles/main.css';
import ConfirmDialog from './components/inheritance/ConfirmDialog';
import Dialog, {
  DialogHeader,
  DialogContent,
  DialogFooter,
} from './components/composition/Dialog';

/**
 * Main App component demonstrating the difference between
 * Inheritance and Composition patterns in React
 */
function App() {
  // State for managing dialog visibility
  const [showInheritanceDialog, setShowInheritanceDialog] = useState(false);
  const [showCompositionDialog, setShowCompositionDialog] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Composition vs Inheritance in React
        </h1>
        <p className="text-gray-600">
          This example demonstrates two different approaches to building reusable
          components in React: Inheritance and Composition.
        </p>
      </header>

      <main className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Inheritance Example */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Inheritance Pattern</h2>
            <p className="text-gray-600 mb-4">
              Uses classical inheritance to extend a base dialog component.
            </p>
            <button
              onClick={() => setShowInheritanceDialog(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Show Inheritance Dialog
            </button>
          </div>

          {/* Composition Example */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Composition Pattern</h2>
            <p className="text-gray-600 mb-4">
              Uses component composition to build flexible, reusable components.
            </p>
            <button
              onClick={() => setShowCompositionDialog(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Show Composition Dialog
            </button>
          </div>
        </div>

        {/* Inheritance-based Dialog */}
        {showInheritanceDialog && (
          <ConfirmDialog
            title="Inheritance Example"
            content="This dialog extends a base dialog component using inheritance.
                    It overrides the footer to add a confirm button."
            onClose={() => setShowInheritanceDialog(false)}
            onConfirm={() => {
              alert('Confirmed!');
              setShowInheritanceDialog(false);
            }}
          />
        )}

        {/* Composition-based Dialog */}
        <Dialog
          isOpen={showCompositionDialog}
          onClose={() => setShowCompositionDialog(false)}
        >
          <DialogHeader>
            <h2 className="text-lg font-semibold">Composition Example</h2>
          </DialogHeader>
          <DialogContent>
            <p>
              This dialog is built using composition. Each part is a separate
              component that can be easily customized and reused.
            </p>
          </DialogContent>
          <DialogFooter>
            <button
              onClick={() => setShowCompositionDialog(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                alert('Confirmed!');
                setShowCompositionDialog(false);
              }}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Confirm
            </button>
          </DialogFooter>
        </Dialog>
      </main>
    </div>
  );
}

export default App;
