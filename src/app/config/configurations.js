const API_CONFIG = {
  domain: 'http://backend.nnodes.com/api/',
  version: 'v1',
  url: () => API_CONFIG.domain + API_CONFIG.version,
  globalTimeout: 15 * 1000,
  timeoutMessage:
    'Está tardando demasiado, verifica tu conexión a internet e intenta nuevamente'
};

export default API_CONFIG;
