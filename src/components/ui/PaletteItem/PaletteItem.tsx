import React, { BaseSyntheticEvent, FC, useEffect, useRef, useState } from 'react';
import { PaletteItemProps } from './PaletteItem.models';
import { ReactComponent as CloseIcon } from '../../../assets/icons/close-circle.svg';
import styles from './PaletteItem.module.scss';
import cn from 'classnames';
import ColorPicker from '../../base/ColorPicker/ColorPicker';
import { useDebounce } from '../../../hooks';

const PaletteItem: FC<PaletteItemProps> = ({
    item,
    needOpen,
    onFirstOpen,
    className,
    onSelectColor,
    onRemove,
    ...props
}) => {
    const pickerRef = useRef<HTMLInputElement | null>(null);
    const [color, setColor] = useState<string>(item.color);
    const debouncedColor = useDebounce(color, 250);

    useEffect(() => {
        if (needOpen) {
            pickerRef.current?.click();
            onFirstOpen(item.id);
        }
    }, []);

    useEffect(() => {
        onSelectColor(item.id, debouncedColor);
    }, [debouncedColor]);

    const removeHandler = (event: BaseSyntheticEvent) => {
        event.preventDefault();
        event.stopPropagation();
        onRemove(item.id);
    };

    const selectHandler = (event: BaseSyntheticEvent) => {
        const newColor = event.target.value;
        if (newColor) {
            setColor(newColor);
        }
    };

    return (
        <div className={cn(className, styles['palette-item'])}{...props} style={{backgroundColor: color}}>
            <CloseIcon className={styles.remove} onClick={removeHandler}/>
            <ColorPicker className={styles.picker} value={color} onChange={selectHandler} ref={pickerRef}/>
        </div>
    );
};

export default PaletteItem;
