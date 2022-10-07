import { Alert, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import { addSomeTickets } from '../../redux/ticketsSlice'
import Ticket from '../Ticket'
import './TicketList.scss'

const TicketList = ({ tickets }) => {
  const dispatch = useDispatch()
  const ticketsList = tickets.map((item) => {
    return (
      <Ticket
        key={uuidv4()}
        price={item.price}
        carrier={item.carrier}
        segments={item.segments}
        first_segment={item.segments[0]}
        second_segment={item.segments[1]}
      />
    )
  })
  if (!ticketsList.length) return <Alert className="container alert" message="Ничего не найдено" type="info" />
  return (
    <div className="tickets__list">
      {ticketsList}
      <Button className="add_button" type="primary" onClick={() => dispatch(addSomeTickets())}>
        Показать еще 5 билетов
      </Button>
    </div>
  )
}

export default TicketList
