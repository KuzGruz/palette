import React, { FC } from 'react';
import { ResponseViewProps } from './ResponseView.models';
import Textarea from '../../base/Textarea/Textarea';
import styles from './ResponseView.module.scss';
import cn from 'classnames';

const ResponseView: FC<ResponseViewProps> = ({response, className, ...props}) => (
    <Textarea className={cn(styles.response, className)} {...props} label="Response" value={response} readOnly/>
);

export default ResponseView;
