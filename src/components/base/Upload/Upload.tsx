import React, { BaseSyntheticEvent, ChangeEvent, DragEvent, ForwardedRef, forwardRef, useRef, useState } from 'react';
import { UploadFile, UploadModels } from './Upload.models';
import styles from './Upload.module.scss';
import cn from 'classnames';
import { ReactComponent as FileUploadIcon } from '../../../assets/icons/file-upload.svg';
import { ReactComponent as CloseIcon } from '../../../assets/icons/close.svg';

const Upload = forwardRef((props: UploadModels, ref: ForwardedRef<HTMLInputElement>) => {
    const {label, error, onChange, ...restProps} = props;
    const [file, setFile] = useState<UploadFile | null>(null);
    const fileRef = useRef<HTMLDivElement | null>(null);

    const dragEnterHandler = (event: DragEvent<HTMLDivElement>) => {
        event.stopPropagation();
        fileRef.current?.classList.add(styles.active);
    };

    const dragEndHandler = (event: DragEvent<HTMLDivElement>) => {
        event.stopPropagation();
        fileRef.current?.classList.remove(styles.active);
    };

    const fileUpload = (event: BaseSyntheticEvent) => {
        if (onChange) {
            onChange(event as ChangeEvent<HTMLInputElement>);
        }
        const newFile = event.target.files[0] as File;
        if (newFile) {
            setFile({file: newFile, url: URL.createObjectURL(newFile)});
        }
    };

    const removeHandler = (event: BaseSyntheticEvent) => {
        event.stopPropagation();
        setFile(null);
    };

    return (
        <div className={cn(styles.upload, {[styles.error]: !!error})}>
            <label>{label}</label>
            <div className={styles.wrapper}>
                {file
                    ?
                    <>
                        <img src={file.url} alt={file.file.name}/>
                        <CloseIcon className={styles.close} onClick={removeHandler}/>
                    </>
                    :
                    <div ref={fileRef}
                        className={styles.file}
                        onDragEnter={dragEnterHandler}
                        onDragLeave={dragEndHandler}
                        onDrop={dragEndHandler}>
                        <FileUploadIcon className={styles.icon}/>
                        <input type="file" {...restProps} accept="image/*" ref={ref} onChange={fileUpload}/>
                    </div>
                }
            </div>
        </div>
    );
});

Upload.displayName = 'Upload';

export default Upload;
