import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async (id, { rejectWithValue }) => {
  try {
    const res = await fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${id}`)
    if (!res.ok) {
      throw new Error(`${res.status}`)
    }
    return await res.json()
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

export const fetchId = createAsyncThunk('tickets/fetchId', async (_, { rejectWithValue }) => {
  try {
    const res = await fetch('https://front-test.dev.aviasales.ru/search')
    return await res.json()
  } catch (error) {
    rejectWithValue(error)
  }
})
