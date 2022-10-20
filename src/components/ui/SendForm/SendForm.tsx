import React, { FC, useState } from 'react';
import Input from '../../base/Input/Input';
import Upload from '../../base/Upload/Upload';
import Button from '../../base/Button/Button';
import styles from './SendForm.module.scss';
import { SendFormProps, SendFormValue } from './SendForm.models';
import { useForm } from 'react-hook-form';
import { SendFormDto } from '../../../services/send/send.models';
import { requiredMessage } from '../../../utils';

const SendForm: FC<SendFormProps> = ({onSubmit}) => {
    const [submitted, setSubmitted] = useState<boolean>(false);
    const {register, handleSubmit, formState: {errors}} = useForm<SendFormValue>();

    const nameController = register('name', {required: requiredMessage});
    const surnameController = register('surname', {required: requiredMessage});
    const patronymicController = register('patronymic', {required: requiredMessage});
    const photoController = register('photo', {required: requiredMessage});

    const submitHandler = (data: SendFormValue) => {
        const fromValue: SendFormDto = {...data, photo: data.photo[0]};
        if (onSubmit) {
            onSubmit(fromValue);
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
            <Input label="Имя" error={submitted ? errors.name?.message : ''}{...nameController}/>
            <Input label="Фамилия" error={submitted ? errors.surname?.message : ''}{...surnameController}/>
            <Input label="Отчество" error={submitted ? errors.patronymic?.message : ''}{...patronymicController}/>
            <Upload label="Фото" error={submitted ? errors.photo?.message : ''}{...photoController}/>
            <Button className={styles.submit} onClick={() => setSubmitted(true)}>Сохранить</Button>
        </form>
    );
};

export default SendForm;
