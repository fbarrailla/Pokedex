const STATE_STORAGE_KEY = '__appState'

export const loadState = () => {
  const stateStr = localStorage.getItem(STATE_STORAGE_KEY)
  if (stateStr) {
    try {
      return JSON.parse(stateStr)
    } catch (err) {
      localStorage.removeItem(STATE_STORAGE_KEY)
    }
  }
  return
}

export const saveState = newState => {
  localStorage.setItem(STATE_STORAGE_KEY, JSON.stringify(newState))
}
