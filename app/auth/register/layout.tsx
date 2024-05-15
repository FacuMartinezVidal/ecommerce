import React from "react";

export default function RegisterLayout({
                                           children,
                                       }: {
    children: React.ReactNode;
}) {
    return (
        <section className="flex flex-col gap-4 py-8 md:py-10">
            <div className="inline-block text-center justify-center">
                {children}
            </div>
        </section>
    );
}
