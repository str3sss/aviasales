import { createAsyncThunk } from '@reduxjs/toolkit'

const url = 'https://front-test.dev.aviasales.ru'

export const getTickets = createAsyncThunk('tickets/fetchTickets', async (id, { rejectWithValue }) => {
  try {
    let res = await fetch(`${url}/tickets?searchId=${id}`)
    if (res.status === 500) {
      res = await fetch(`${url}/tickets?searchId=${id}`)
    }
    if (!res.ok && res.status !== 500) {
      throw new Error(`${res.status}`)
    }
    return await res.json()
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

export const getTicketsId = createAsyncThunk('tickets/fetchId', async (_, { rejectWithValue }) => {
  try {
    const res = await fetch(`${url}/search`)
    return await res.json()
  } catch (error) {
    rejectWithValue(error)
  }
})
