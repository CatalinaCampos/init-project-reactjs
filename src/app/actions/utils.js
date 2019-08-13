export const utilsTypes = {
  GET_SLIDES_REQUEST: 'GET_SLIDES_REQUEST',
  GET_SLIDES_SUCCESS: 'GET_SLIDES_SUCCESS',
  GET_SLIDES_FAILURE: 'GET_SLIDES_FAILURE',
  GET_PAGE_REQUEST: 'GET_PAGE_REQUEST',
  GET_PAGE_SUCCESS: 'GET_PAGE_SUCCESS',
  GET_PAGE_FAILURE: 'GET_PAGE_FAILURE'
};

export const getSlides = () => ({ type: utilsTypes.GET_SLIDES_REQUEST });
export const getPage = url => ({
  type: utilsTypes.GET_PAGE_REQUEST,
  url
});
