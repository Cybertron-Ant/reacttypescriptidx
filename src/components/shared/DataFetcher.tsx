import React, { useState, useEffect } from 'react';

/**
 * Interface for the state of the data fetching process
 * @template T - The type of data being fetched
 */
interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

/**
 * Props interface for the DataFetcher component
 * @template T - The type of data being fetched
 */
interface DataFetcherProps<T> {
  /**
   * The URL to fetch data from
   */
  url: string;
  /**
   * Render prop function that receives the current fetch state
   * Returns a React node to be rendered
   */
  children: (state: FetchState<T>) => React.ReactNode;
}

/**
 * DataFetcher Component - A render props pattern implementation for data fetching
 * Handles the data fetching lifecycle and provides state to child components
 * 
 * @example
 * ```tsx
 * <DataFetcher url="https://api.example.com/data">
 *   {({ data, loading, error }) => {
 *     if (loading) return <div>Loading...</div>;
 *     if (error) return <div>Error: {error.message}</div>;
 *     return <div>Data: {JSON.stringify(data)}</div>;
 *   }}
 * </DataFetcher>
 * ```
 */
function DataFetcher<T>({ url, children }: DataFetcherProps<T>): JSX.Element {
  // Initialize state with loading true and no data or error
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  // Effect to fetch data when the URL changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        setState(prev => ({ ...prev, loading: true }));
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setState({
          data,
          loading: false,
          error: null,
        });
      } catch (error) {
        setState({
          data: null,
          loading: false,
          error: error instanceof Error ? error : new Error('An error occurred'),
        });
      }
    };

    fetchData();
  }, [url]); // Re-run effect when URL changes

  // Render the children function with the current state
  return <>{children(state)}</>;
}

export default DataFetcher;
