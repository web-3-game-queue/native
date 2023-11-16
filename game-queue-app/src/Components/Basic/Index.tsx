import { FC } from 'react';
import { Link } from 'react-router-dom';

export const IndexComponent: FC = () => {
    const maps = (
        <li className="list-group-item">
            <h2>
                <Link to="/maps">К картам</Link>
            </h2>
        </li>
    );
    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <ul className="list-group" style={{ width: 'fit-content' }}>
                <li className="list-group-item list-group-item-primary" aria-current="true">
                    Меню
                </li>
                {maps}
            </ul>
        </div>
    );
};
