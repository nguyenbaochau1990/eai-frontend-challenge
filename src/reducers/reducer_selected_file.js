import { SELECT_FILE } from "../actions"

export const selectedFileReducer = (state=null, action) => {
  switch (action.type) {
    case SELECT_FILE:
      return action.payload
    default:
      return state
  }
}