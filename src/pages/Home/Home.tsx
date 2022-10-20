import React, { FC, useState } from 'react';
import SendForm from '../../components/ui/SendForm/SendForm';
import styles from './Home.module.scss';
import { SendFormDto } from '../../services/send/send.models';
import sendService from '../../services/send/send.service';
import ResponseView from '../../components/ui/ResponseView/ResponseView';

const Home: FC = () => {
    const [response, setResponse] = useState<string>('');

    const sendForm = async (data: SendFormDto) => {
        try {
            const info = await sendService.send(data);
            setResponse(JSON.stringify(info, null ,2));
        } catch (e) {
            console.error(e);
        }
    };
    return (
        <div className={styles.wrapper}>
            <SendForm onSubmit={sendForm}/>
            <div className={styles['json-wrapper']}>
                <ResponseView className={styles.json} response={response}/>
            </div>
        </div>
    );
};

export default Home;
