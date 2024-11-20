import React, { forwardRef, ForwardedRef } from 'react';

/**
 * Interface defining the props for the TextInput component
 * @interface TextInputProps
 * @property {string} label - Label text for the input field
 * @property {string} placeholder - Placeholder text for the input field
 * @property {string} [className] - Optional CSS classes for styling
 */
interface TextInputProps {
  label: string;
  placeholder: string;
  className?: string;
}

/**
 * A reusable text input component that demonstrates the use of forwarded refs
 * This component is built with accessibility and reusability in mind
 * 
 * @component
 * @example
 * ```tsx
 * const inputRef = useRef<HTMLInputElement>(null);
 * <TextInput ref={inputRef} label="Username" placeholder="Enter your username" />
 * ```
 */
const TextInput = forwardRef((
  { label, placeholder, className = '' }: TextInputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <div className="flex flex-col space-y-2">
      <label 
        className="text-sm font-medium text-gray-700"
        htmlFor={`input-${label}`}
      >
        {label}
      </label>
      <input
        ref={ref}
        type="text"
        id={`input-${label}`}
        placeholder={placeholder}
        className={`px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}
      />
    </div>
  );
});

TextInput.displayName = 'TextInput';

export default TextInput;
