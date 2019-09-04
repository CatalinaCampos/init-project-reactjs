export const utilsTypes = {
  // SLIDES
  GET_SLIDES_REQUEST: 'GET_SLIDES_REQUEST',
  GET_SLIDES_SUCCESS: 'GET_SLIDES_SUCCESS',
  GET_SLIDES_FAILURE: 'GET_SLIDES_FAILURE',
  // PAGE
  GET_PAGE_REQUEST: 'GET_PAGE_REQUEST',
  GET_PAGE_SUCCESS: 'GET_PAGE_SUCCESS',
  GET_PAGE_FAILURE: 'GET_PAGE_FAILURE',
  // ALERT
  SET_ALERT: 'SET_ALERT',
  CLOSE_ALERT: 'CLOSE_ALERT',
  SET_ALERT_ERROR: 'SET_ALERT_ERROR'
};

// SLIDE
export const getSlides = () => ({ type: utilsTypes.GET_SLIDES_REQUEST });

// PAGE
export const getPage = url => ({
  type: utilsTypes.GET_PAGE_REQUEST,
  url
});

// ALERT
export const closeAlert = params => ({ type: utilsTypes.CLOSE_ALERT, params });
export const sendAlert = params => ({ type: utilsTypes.SET_ALERT, ...params });
