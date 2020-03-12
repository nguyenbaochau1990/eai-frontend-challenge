export const SELECT_FILE = 'SELECT_FILE'

export const selectFile = (file) => {
  return{
    type: SELECT_FILE,
    payload: file
  }
}