import React, { FC } from 'react';
import { ButtonProps } from './Button.models';
import cn from 'classnames';
import styles from './Button.module.scss';

const Button: FC<ButtonProps> = ({children, className, fullWidth = true, ...props}) => {
    return (
        <button className={cn(styles.button, className, {[styles.full]: fullWidth})} {...props}>
            {children}
        </button>
    );
};

export default Button;
