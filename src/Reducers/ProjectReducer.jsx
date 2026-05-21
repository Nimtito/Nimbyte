export function projectReducer(state, action) {

  switch (action.type) {

    case "ADD_PROJECT":
      return [...state, action.payload]

    default:
      return state
  }
}