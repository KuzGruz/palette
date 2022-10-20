import { AppEnvironment } from './environment.models';

class EnvironmentService implements AppEnvironment {
    readonly baseUrl: string;

    constructor() {
        this.baseUrl = String(process.env.REACT_APP_BASE_URL);
    }
}

export default new EnvironmentService();
