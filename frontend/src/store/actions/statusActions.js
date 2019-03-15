
export const updateWaiting = (value) => ({
  type: 'UPDATE_WAITING',
  waitingStatus: value
})

export const updateAssigned = (value) => ({
  type: 'UPDATE_ASSIGNED',
  assignedStatus: value
})

export const updatePickedup = (value) => ({
  type: 'UPDATE_PICKEDUP',
  pickedupStatus: value
})

export const updateDelivered = (value) => ({
  type: 'UPDATE_DELIVERED',
  deliveredStatus: value
})