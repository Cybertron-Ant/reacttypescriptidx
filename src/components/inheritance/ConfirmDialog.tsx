import React from 'react';
import BaseDialog from './BaseDialog';
import { DialogProps } from '../shared/types';

/**
 * Interface extending DialogProps for additional confirmation functionality
 */
interface ConfirmDialogProps extends DialogProps {
  onConfirm: () => void;
}

/**
 * ConfirmDialog Component - Extends BaseDialog to add confirmation functionality
 * Demonstrates inheritance by extending the base component and overriding methods
 */
class ConfirmDialog extends BaseDialog {
  // Type assertion to access the extended props
  declare props: ConfirmDialogProps;

  /**
   * Override the footer to add a confirm button
   */
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
