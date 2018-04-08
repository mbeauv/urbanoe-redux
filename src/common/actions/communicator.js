// @flow

import axios from 'axios';

let axiosInstance : axios = null;

export function setUrbanoeCommunicatorInstance(instance : axios) {
  axiosInstance = instance;
}

export function urbanoeCommunicator() : axios {
  return axiosInstance;
}
