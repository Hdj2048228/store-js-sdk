import axios from 'axios';
import { config } from '../init.js';

const baseURL = 'https://store.xsolla.com/api/';
const timeout = 15000;

export class PromoCode {
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

  async redeem(promoCode, cartId, selectedReward) {
    let axiosInstance = axios.create(this.axiosConfig);

    try {
      const url = config.getVersion() + "/project/" + config.getProjectId() + "/promocode/redeem";
      const body = {
        coupon_code: promoCode,
        cart: {
          id: cartId
        }
      };

      if (selectedReward !== null) {
        body['selected_unit_items'] = selectedReward;
      }
      return await axiosInstance.post(url, body);
    } catch (e) {
      return e;
    }
  }

  async rewards(promoCode) {
    let axiosInstance = axios.create(this.axiosConfig);

    try {
      const url = config.getVersion() + "/project/" + config.getProjectId() + `/promocode/code/${promoCode}/rewards`;
      return await axiosInstance.get(url);
    } catch (e) {
      return e;
    }
  }
}
