import { FC } from 'react';

export const LoadingIndicator: FC = () => {
    return (
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
};
