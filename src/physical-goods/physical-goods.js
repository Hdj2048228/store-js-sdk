import axios from 'axios';
import { config } from '../init.js';

const baseURL = "https://store.xsolla.com/api/";
const timeout = 15000;

export class PhysicalGood {
    constructor(auth) {
        this.auth = auth;
        this.axiosConfig = {
            baseURL: baseURL,
            timeout: timeout
        }
    }

    async getPhysicalGoodList() {
        let axiosInstance = axios.create(this.axiosConfig);

        try {
            const url = config.getVersion() + "/project/" + config.getProjectId() + "/items/physical_good";
            return await axiosInstance.get(url);
        } catch (e) {
            return e;
        }
    }
}