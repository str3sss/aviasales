import { useEffect, useState } from 'react'

import { useGetId } from './useGetId'

export const UseGetTickets = () => {
  const id = useGetId()
  const [stop, setStop] = useState(false)
  const [tickets, setTickets] = useState([])

  async function getTickets() {
    let r = await fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${id}`)
    if (r.status === 500) {
      await getTickets()
    } else {
      const res = await r.json()
      setTickets([...tickets, ...res.tickets])
      setStop(res.stop)
    }
  }

  useEffect(() => {
    if (id && !stop) {
      getTickets()
    }
  }, [id, tickets, stop])

  return { stop, tickets }
}
