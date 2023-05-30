"use client";
import ReactQueryProviders from "@/client/providers/ReactQueryProviders";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ReactQueryProviders>
            {children}
        </ReactQueryProviders>
    )
}
