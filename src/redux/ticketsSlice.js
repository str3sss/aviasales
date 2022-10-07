import { createSlice } from '@reduxjs/toolkit'

import { sortByFlyDuration, sortByOptimal, sortByPrice } from '../utils/SortingAlgoritms'

import { getTicketsId, getTickets } from './asyncHandles'

const initialState = {
  id: null,
  tickets: [],
  numberOfTickets: 5,
  stop: false,
  error: null,
  filter: 'none',
  selectedTicketsTransfer: [0, 1, 2, 3],
}

export const ticketSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    addSomeTickets(state) {
      state.numberOfTickets += 5
    },
    changeTransfers(state, action) {
      if (action.payload === -1) {
        state.selectedTicketsTransfer =
          JSON.stringify(state.selectedTicketsTransfer) === JSON.stringify([0, 1, 2, 3]) ? [] : [0, 1, 2, 3]
      } else {
        state.selectedTicketsTransfer = state.selectedTicketsTransfer.includes(action.payload)
          ? state.selectedTicketsTransfer.filter((i) => i != action.payload)
          : [...state.selectedTicketsTransfer, action.payload].sort((a, b) => a - b)
      }
    },
    sortTicketsByPrice(state) {
      state.filter = 'price'
      state.tickets = sortByPrice(state.tickets)
    },
    sortTicketsByFlyDuration(state) {
      state.filter = 'duration'
      state.tickets = sortByFlyDuration(state.tickets)
    },
    sortTicketsByOptimal(state) {
      state.filter = 'optimal'
      state.tickets = sortByOptimal(state.tickets)
    },
  },
  extraReducers: {
    [getTicketsId.fulfilled]: (state, action) => {
      state.id = action.payload.searchId
    },
    [getTickets.fulfilled]: (state, action) => {
      state.tickets = [...state.tickets, ...action.payload.tickets]
      state.stop = action.payload.stop
    },
    [getTickets.rejected]: (state) => {
      state.error = true
    },
  },
})

export const { addSomeTickets, sortTicketsByPrice, sortTicketsByFlyDuration, sortTicketsByOptimal, changeTransfers } =
  ticketSlice.actions

const rootReducer = ticketSlice.reducer
export default rootReducer
