import axios from "axios";
import { config } from "../init.js";

const baseURL = "https://store.xsolla.com/api/";
const timeout = 15000;

export class Inventory {
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

    async consumeItem(itemSku, quantity = 1, instance_id = null) {
        let axiosInstance = axios.create(this.axiosConfig);

        try {
            const url = config.getVersion() + "/project/" + config.getProjectId() + "/user/inventory/item/consume";
            const body = {
                sku: itemSku,
                quantity: quantity,
                instance_id: instance_id
            };
            return await axiosInstance.post(url, body);
        } catch (e) {
            return e;
        }
    }
}
