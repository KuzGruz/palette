import { SendFormDto } from '../../../services/send/send.models';

export interface SendFormProps {
    onSubmit: (data: SendFormDto) => void;
}

export interface SendFormValue {
    name: string;
    surname: string;
    patronymic: string;
    photo: File[];
}

