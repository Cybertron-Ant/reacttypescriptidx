import React, { Component } from 'react';

interface LifecycleDemoProps {
    initialCount: number;
    title: string;
}

interface LifecycleDemoState {
    count: number;
    lastUpdated: Date;
    mounted: boolean;
}

/**
 * LifecycleDemo Component
 * 
 * This component demonstrates React lifecycle methods and the differences between Props and State.
 * 
 * Props:
 * - Props are external configurations passed to the component
 * - They are immutable (read-only) within the component
 * - Changes in props trigger component updates
 * 
 * State:
 * - State is internal to the component
 * - It can be modified using setState()
 * - Changes in state trigger component updates
 */
class LifecycleDemo extends Component<LifecycleDemoProps, LifecycleDemoState> {
    // Timer instance variable for cleanup
    private timer: NodeJS.Timeout | null = null;

    /**
     * Constructor
     * - First lifecycle method called
     * - Initialize state here
     * - Bind methods if not using arrow functions
     */
    constructor(props: LifecycleDemoProps) {
        super(props);
        
        // Initialize state with both derived and independent values
        this.state = {
            count: props.initialCount, // Derived from props
            lastUpdated: new Date(),   // Independent state
            mounted: false             // Component mount status
        };

        console.log('1. Constructor called');
    }

    /**
     * ComponentDidMount
     * - Called after component is mounted to the DOM
     * - Perfect for side effects (API calls, subscriptions, timers)
     */
    componentDidMount() {
        console.log('3. ComponentDidMount called');
        
        // Set up a timer as an example side effect
        this.timer = setInterval(this.tick, 1000);
        
        this.setState({ mounted: true });
    }

    /**
     * ComponentDidUpdate
     * - Called after component updates
     * - Access to previous props and state
     * - Good place to respond to prop/state changes
     */
    componentDidUpdate(prevProps: LifecycleDemoProps, prevState: LifecycleDemoState) {
        console.log('4. ComponentDidUpdate called');
        
        // Example of comparing previous props/state
        if (prevProps.title !== this.props.title) {
            console.log('Title prop changed!');
        }

        if (prevState.count !== this.state.count) {
            console.log('Count state changed!');
        }
    }

    /**
     * ComponentWillUnmount
     * - Called before component is removed from DOM
     * - Clean up subscriptions, timers, etc.
     */
    componentWillUnmount() {
        console.log('5. ComponentWillUnmount called');
        
        // Clean up timer
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    /**
     * Example of a method that updates state
     * Using arrow function to automatically bind 'this'
     */
    tick = () => {
        this.setState(prevState => ({
            lastUpdated: new Date()
        }));
    };

    /**
     * Handler for incrementing count
     * Demonstrates state updates based on previous state
     */
    handleIncrement = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    };

    /**
     * Handler for decrementing count
     * Demonstrates state updates based on previous state
     */
    handleDecrement = () => {
        this.setState(prevState => ({
            count: prevState.count - 1
        }));
    };

    /**
     * Render method
     * - Required for every component
     * - Called during mounting and updating phases
     * - Should be pure (same props/state should return same JSX)
     */
    render() {
        console.log('2. Render called');
        
        const { title } = this.props;
        const { count, lastUpdated, mounted } = this.state;

        return (
            <div className="lifecycle-demo">
                <h2>{title}</h2>
                <div className="status">
                    <p>Component Mounted: {mounted ? 'Yes' : 'No'}</p>
                    <p>Last Updated: {lastUpdated.toLocaleTimeString()}</p>
                </div>
                <div className="counter">
                    <button onClick={this.handleDecrement}>-</button>
                    <span>{count}</span>
                    <button onClick={this.handleIncrement}>+</button>
                </div>
                <div className="explanation">
                    <h3>Component Information:</h3>
                    <p><strong>Props (Immutable):</strong></p>
                    <ul>
                        <li>Title: {title}</li>
                        <li>Initial Count: {this.props.initialCount}</li>
                    </ul>
                    <p><strong>State (Mutable):</strong></p>
                    <ul>
                        <li>Current Count: {count}</li>
                        <li>Mount Status: {mounted.toString()}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default LifecycleDemo;
