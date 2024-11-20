import React from 'react';
import { DialogProps } from '../shared/types';

/**
 * BaseDialog Component - Parent class for dialog components
 * Demonstrates the inheritance pattern in React
 * 
 * Inheritance Pros:
 * - Clear hierarchical relationship
 * - Code reuse through extension
 * 
 * Inheritance Cons:
 * - Tight coupling between parent and child
 * - Less flexible than composition
 * - Can lead to deep inheritance chains
 */
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
