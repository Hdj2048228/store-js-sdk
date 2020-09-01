import axios from 'axios';
import { config } from '../init.js';

const baseURL = 'https://store.xsolla.com/api/';
const timeout = 15000;

export class Coupon {
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

  async redeem(couponCode, selectedReward) {
    let axiosInstance = axios.create(this.axiosConfig);

    try {
      const url = config.getVersion() + "/project/" + config.getProjectId() + "/coupon/redeem";
      const body = {
        coupon_code: couponCode,
      };

      if (selectedReward !== null) {
        body['selected_unit_items'] = selectedReward;
      }
      return await axiosInstance.post(url, body);
    } catch (e) {
      return e;
    }
  }

  async rewards(couponCode) {
    let axiosInstance = axios.create(this.axiosConfig);

    try {
      const url = config.getVersion() + "/project/" + config.getProjectId() + `/coupon/code/${couponCode}/rewards`;
      return await axiosInstance.get(url);
    } catch (e) {
      return e;
    }
  }
}