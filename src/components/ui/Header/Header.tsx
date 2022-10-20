import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import cn from 'classnames';
import { HeaderModels, links } from './Header.models';

const Header: FC<HeaderModels> = ({className, ...props}) => {
    return (
        <header {...props} className={cn(className, styles.header)}>
            <nav>
                <ul>
                    {links.map(link =>
                        <li key={link.link}>
                            <NavLink
                                end={link.end}
                                to={link.link}
                                className={({isActive}) => (isActive ? styles.active : '')}>
                                {link.title}
                            </NavLink>
                        </li>)
                    }
                </ul>
            </nav>
        </header>
    );
};

export default Header;
