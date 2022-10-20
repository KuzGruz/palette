import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

export interface ResponseViewProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    response: string;
}
