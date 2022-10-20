import { SendFormDto } from './send.models';
import httpService from '../http/http.service';
import { AxiosInstance } from 'axios';

class SendService {
    readonly endpoint: string = 'send.php';

    constructor(private readonly http: AxiosInstance) {
    }

    async send({photo, surname, name, patronymic}: SendFormDto): Promise<unknown> {
        const formData = new FormData();
        const blob = new Blob([photo], {type: 'image'});

        formData.set('action', 'send_data');
        formData.set('id', '1');
        formData.set('contact[name]', name);
        formData.set('contact[surname]', surname);
        formData.set('contact[patronymic]', patronymic);
        formData.set('image', blob);

        const res = await this.http.post(this.endpoint, formData);
        return res.data;
    }
}

export default new SendService(httpService);
