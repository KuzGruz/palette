import React, { FC } from 'react';
import { TextareaProps } from './Textarea.models';
import styles from './Textarea.module.scss';

const Textarea: FC<TextareaProps> = ({label, ...props}) => {
    return (
        <div className={styles.wrapper}>
            <label>{label}</label>
            <textarea {...props}/>
        </div>
    );
};

export default Textarea;
