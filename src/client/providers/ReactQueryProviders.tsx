"use client"
import * as React from "react";
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

export default function ReactQueryProviders({ children }: { children: React.ReactNode }) {
    const [queryClient] = React.useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
}