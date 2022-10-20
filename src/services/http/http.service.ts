import axios from 'axios';
import environmentService from '../environment/environment.service';

export default axios.create({baseURL: environmentService.baseUrl});
