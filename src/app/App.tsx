import React, { FC } from 'react';
import Header from '../components/ui/Header/Header';
import styles from './App.module.scss';
import { Route, Routes } from 'react-router-dom';
import { routes } from './App.models';

const App: FC = () => {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <main>
                <Routes>
                    {routes.map(route => <Route key={route.path} {...route} />)}
                </Routes>
            </main>
        </div>
    );
};

export default App;
