import { API_ROOT } from '../../constants'

const LOAD_FAILED = '/posts/LOAD_FAILED'
const LOAD_STARTED = '/posts/LOAD_STARTED'
const LOAD_SUCCEEDED = '/posts/LOAD_SUCCEEDED'

const initialState = {
  isLoading: false,
  items: []
}

export default function posts (state = initialState, action) {
  switch (action.type) {
    case LOAD_FAILED:
      return {
        ...state,
        isLoading: false
      }

    case LOAD_STARTED:
      return {
        ...state,
        isLoading: true
      }

    case LOAD_SUCCEEDED:
      return {
        ...state,
        items: action.payload,
        isLoading: false
      }

    default:
      return state
  }
}

export function load () {
  return async dispatch => {
    try {
      dispatch({ type: LOAD_STARTED })
      const res = await fetch(`${API_ROOT}/posts`)
      if (!res.ok) {
        dispatch({ type: LOAD_FAILED })
        return
      }
      const posts = await res.json()
      dispatch({ type: LOAD_SUCCEEDED, payload: posts })
    } catch (error) {
      console.error(error)
    }
  }
}
