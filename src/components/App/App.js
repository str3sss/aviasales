import { Skeleton } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { getTicketsId, getTickets } from '../../redux/asyncHandles'
import Menu from '../Menu'
import Tabs from '../Tabs'
import './App.scss'
import logo from '../../assets/img/Logo.svg'
import {
  selectId,
  selectnumberOfTickets,
  selectSelectedTicketsTransfer,
  selectStop,
  selectTickets,
} from '../../redux/selectors'
import TicketList from '../TicketList'
import { sortByTicketsTransfer } from '../../utils/SortingAlgoritms'

function App() {
  const dispatch = useDispatch()

  const stop = useSelector(selectStop)
  const tickets = useSelector(selectTickets)
  const id = useSelector(selectId)
  const numberOfTickets = useSelector(selectnumberOfTickets)
  const transfers = useSelector(selectSelectedTicketsTransfer)

  useEffect(() => {
    dispatch(getTicketsId())
  }, [])

  useEffect(() => {
    if (!stop && id) {
      dispatch(getTickets(id))
    }
  }, [tickets, id])

  if (!stop) {
    return (
      <main>
        <img src={logo} className="logotype" />
        <div className="main__container">
          <Menu />
          <Tabs />
          <Skeleton active className="container skeleton" round={true} />
          <Skeleton active className="container skeleton" round={true} />
          <Skeleton active className="container skeleton" round={true} />
        </div>
      </main>
    )
  }
  return (
    <main>
      <img src={logo} className="logotype" />
      <div className="main__container">
        <Menu transfers={transfers} />
        <Tabs />
        <TicketList tickets={sortByTicketsTransfer(tickets, transfers).slice(0, numberOfTickets)} />
      </div>
    </main>
  )
}

export default App
