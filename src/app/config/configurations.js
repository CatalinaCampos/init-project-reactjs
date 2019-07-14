const API_CONFIG = {
  domain: 'http://nn-meds.nnodes.com/api/',
  version: 'v1',
  url: () => this.domain + this.version,
  timeout: 15 * 1000,
  timeoutMessage:
    'Está tardando demasiado, verifica tu conexión a internet e intenta nuevamente'
};

export default API_CONFIG;
