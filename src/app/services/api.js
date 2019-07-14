import API_CONFIG from '../config/configurations';

const { url } = API_CONFIG;

export default class API {
  static genericErrorMessage(status) {
    return status === 404 ? 'Recurso no encontrado' : 'Intentelo más tarde';
  }

  static get(route) {
    return fetch(url() + route, {
      method: 'GET'
    });
  }

  static post(route, params = {}) {
    return fetch(url() + route, {
      method: 'POST',
      mode: 'CORS',
      cache: 'no-cache',
      body: JSON.stringify(params)
    });
  }

  static put(route, params = {}) {
    return fetch(url() + route, {
      method: 'PUT',
      mode: 'CORS',
      cache: 'no-cache',
      body: JSON.stringify(params)
    });
  }

  static delete(route) {
    return fetch(url() + route, {
      method: 'DELETE'
    });
  }
}
