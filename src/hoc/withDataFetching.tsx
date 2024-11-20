import React, { ComponentType, useEffect, useState } from 'react';

/**
 * Interface for the data fetching props that will be injected into wrapped components
 */
export interface WithDataFetchingProps<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

/**
 * Higher Order Component for handling data fetching and loading states
 * @param WrappedComponent - The component to be wrapped with data fetching logic
 * @param fetchData - The function that fetches the required data
 * @returns A new component with data fetching capabilities
 */
export const withDataFetching = <T, P extends object>(
  WrappedComponent: ComponentType<P & WithDataFetchingProps<T>>,
  fetchData: () => Promise<T>
) => {
  return (props: Omit<P, keyof WithDataFetchingProps<T>>) => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchDataAndUpdateState = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result = await fetchData();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setIsLoading(false);
      }
    };

    useEffect(() => {
      fetchDataAndUpdateState();
    }, []);

    return (
      <WrappedComponent
        {...(props as P)}
        data={data}
        isLoading={isLoading}
        error={error}
        refetch={fetchDataAndUpdateState}
      />
    );
  };
};
