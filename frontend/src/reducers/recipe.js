/*
  TODO: Create reducer and state updates here for recipe
*/

import { GET_RECIPE, RECEIVE_RECIPE, FAIL_RECIPE, SET_RECIPE } from "../actions"

const initialState = {
  isLoading: false,
  error: null,
}

const recipeFetching = (state) => {
  return { ...state, isLoading: true }
}

const recipeFetched = (state, payload) => {
  return { ...state, isLoading: false, ...payload, }
}

const recipeFetchFailed = (state, payload) => {
  return { ...state, isLoading: false, error: payload }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RECIPE:
      return recipeFetching()
    case RECEIVE_RECIPE:
    case SET_RECIPE:
      return recipeFetched(state, payload)
    case FAIL_RECIPE:
      return recipeFetchFailed(state, payload)
    default:
      return state
  }
}
