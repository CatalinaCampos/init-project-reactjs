import API_CONFIG from '../config/configurations';

const { url } = API_CONFIG;

export default class API {
  static genericErrorMessage(status) {
    return status === 404 ? 'Recurso no encontrado' : 'Intentelo más tarde';
  }

  static get(route) {
    return fetch(url() + route, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
  }

  static post(route, params = {}) {
    return fetch(url() + route, {
      method: 'POST',
      cache: 'no-cache',
      body: JSON.stringify(params),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
  }

  static put(route, params = {}) {
    return fetch(url() + route, {
      method: 'PUT',
      cache: 'no-cache',
      body: JSON.stringify(params),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
  }

  static delete(route) {
    return fetch(url() + route, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
  }
}
