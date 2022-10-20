import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { addRandomColor, editColor, markAsCheckedIdColor, removeColor } from '../../../store';
import styles from './PaletteForm.module.scss';
import PaletteItem from '../PaletteItem/PaletteItem';
import Button from '../../base/Button/Button';

const PaletteForm: FC = () => {
    const dispatch = useAppDispatch();
    const colorStore = useAppSelector(state => state.color);

    const clickHandler = () => dispatch(addRandomColor());

    const removeHandler = (id: string) => dispatch(removeColor(id));

    const addHandler = (id: string, color: string) => dispatch(editColor({id, color}));

    const markAsProcessed = (id: string) => dispatch(markAsCheckedIdColor(id));

    return (
        <div className={styles.column}>
            <div className={styles.colors}>
                {colorStore.colors.map(color =>
                    <PaletteItem
                        key={color.id}
                        needOpen={colorStore.lastId === color.id}
                        className={styles.color}
                        onRemove={removeHandler}
                        onFirstOpen={markAsProcessed}
                        onSelectColor={addHandler}
                        item={color}/>
                )}
            </div>

            <Button onClick={clickHandler}>Добавить цвет</Button>
        </div>
    );
};

export default PaletteForm;
