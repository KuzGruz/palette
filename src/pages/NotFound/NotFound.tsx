import React, { FC } from 'react';
import styles from './NotFound.module.scss';

const NotFound: FC = () => <h1 className={styles['not-found']}>Ooops, page not found :(</h1>;

export default NotFound;
