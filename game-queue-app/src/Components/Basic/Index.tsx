import { FC } from 'react';
import { Link } from 'react-router-dom';

export const IndexComponent: FC = () => {
    return (
        <>
            Well, hello there
            <br />
            <Link to="/maps">
                <h2>К картам</h2>
            </Link>
        </>
    );
};
