const initialState = {
  waitingStatus: 0,
  assignedStatus: 0,
  pickedupStatus: 0,
  deliveredStatus: 0,
}

const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_WAITING':
      return {
        ...state,
        waitingStatus: (state.waitingStatus + action.waitingStatus)
      }
    case 'UPDATE_ASSIGNED':
      return {
        ...state,
        assignedStatus: (state.assignedStatus + action.assignedStatus)
      }
    case 'UPDATE_PICKEDUP':
      return {
        ...state,
        pickedupStatus: (state.pickedupStatus + action.pickedupStatus)
      }
    case 'UPDATE_DELIVERED':
      return {
        ...state,
        deliveredStatus: (state.deliveredStatus + action.deliveredStatus)
      }
    default:
      return state
  }
}

export default statusReducer