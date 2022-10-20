import React, { ForwardedRef, forwardRef } from 'react';
import { InputProps } from './Input.models';
import styles from './Input.module.scss';
import cn from 'classnames';

const Input = forwardRef((props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const {label, error, ...restProps} = props;
    return (
        <div className={cn(styles.wrapper, {[styles.error]: !!error})}>
            <label>{label}</label>
            <input {...restProps} type="text" ref={ref}/>
        </div>
    );
});

Input.displayName = 'Search';

export default Input;
