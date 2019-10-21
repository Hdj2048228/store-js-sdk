import axios from "axios";
import { config } from "../init.js";

const baseURL = "https://store.xsolla.com/api/";
const timeout = 15000;

export class Order {
    constructor(auth) {
        this.auth = auth;
        this.axiosConfig = {
            baseURL: baseURL,
            timeout: timeout,
            headers: {
                "Authorization": "Bearer " + this.auth                    
            }
        }
    }

    async getOrder(orderId) {

        let axiosInstance = axios.create(this.axiosConfig);

        try {
            const url = config.getVersion() + "/project/" + config.getProjectId() + "/order/" + orderId;        
            return await axiosInstance.get(url);                    
        } catch (e) {
            return e;                
        }
    }
}