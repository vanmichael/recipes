/* TODO: create recipe fetch actions, creators, and constants
  API: use /api/recipe/:id as a get request to fetch the recipe info
*/

export const GET_RECIPE = "GET_RECIPE"
export const RECEIVE_RECIPE = "RECEIVE_RECIPE"
export const FAIL_RECIPE = "FAIL_RECIPE"
export const SET_RECIPE = "SET_RECIPE"

const fetchingRecipe = () => ({
  type: GET_RECIPE,
})

const fetchedRecipe = (payload) => ({
  type: RECEIVE_RECIPE,
  payload,
})

const failedRecipe = (payload) => ({
  type: FAIL_RECIPE,
  payload,
})

const recipeSet = (payload) => ({
  type: SET_RECIPE,
  payload,
})

const executeFindById = async (id) => {
  const response = await fetch(`/api/recipe/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
  const recipe = await response.json()
  return recipe
}

export const findRecipe = (id) => {
  return (dispatch) => {
    dispatch(fetchingRecipe())
    return executeFindById(id)
      .then((res) => dispatch(fetchedRecipe({...res, id })))
      .catch((err) => dispatch(failedRecipe(err)))
  }
}

export const setRecipe = (payload) => {
  return (dispatch) => {
    dispatch(recipeSet(payload))
  }
}