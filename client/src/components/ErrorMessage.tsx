import * as React from "react";

interface ErrorMessageProps {
    message?: string
}
export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }): React.ReactElement => (
    <div className="flex flex justify-center items-center h-screen">
        <h2 className="font-gotham coral text-5xl text-center pb-4">
            {message || 'Page not found'}
        </h2>
    </div>
)
