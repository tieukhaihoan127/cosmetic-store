import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';
import { store } from '../shared/store/index';
import { Provider } from 'react-redux';


const queryClient = new QueryClient();

const Providers = ({ children } : { children : ReactNode }) => {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </Provider>
    );
};

export default Providers;