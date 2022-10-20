import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface UploadModels extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string;
    error?: string;
}

export interface UploadFile {
    file: File;
    url: string;
}
