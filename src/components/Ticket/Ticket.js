import './Ticket.scss'
import moment from 'moment'

const Ticket = ({ price, carrier, first_segment, second_segment }) => {
  const {
    origin: first_origin,
    destination: first_destination,
    date: first_date,
    stops: first_stops,
    duration: first_duration,
  } = first_segment
  const {
    origin: second_origin,
    destination: second_destination,
    date: second_date,
    stops: second_stops,
    duration: second_duration,
  } = second_segment

  const stops_titles = (stops) => {
    return stops.reduce((total, item) => {
      return ' ' + item + total
    }, '')
  }
  const first_stops_titles = stops_titles(first_stops)
  const second_stops_titles = stops_titles(second_stops)
  const getDuration = (duration) => {
    return moment({ hour: 0, minute: 0, second: 0, millisecond: 0 }).add(duration, 'minutes').format('HH:mm')
  }
  function getTimeDiffer(date, duration) {
    const departure = moment(date).format('HH:mm')
    const landing = moment(date).add(duration, 'minutes').format('HH:mm')
    return `${departure}-${landing}`
  }
  return (
    <div className="container">
      <div className="price">
        <span className="ticket__price">{price.toLocaleString('ru')} Р</span>
      </div>
      <div className="logo">
        <img src={`https://pics.avs.io/99/36/${carrier}.png`} align="rigth" />
      </div>
      <div className="path">
        <div className="path__first">
          <span className="ticket__header">
            {first_origin}-{first_destination}
          </span>
          <br />
          <span className="ticket__text">{getTimeDiffer(first_date, first_duration)}</span>
        </div>
        <div className="path__second">
          <span className="ticket__header">
            {second_origin}-{second_destination}
          </span>
          <br />
          <span className="ticket__text">{getTimeDiffer(second_date, second_duration)}</span>
        </div>
      </div>
      <div className="time">
        <div className="time__first">
          <span className="ticket__header">В ПУТИ</span>
          <br />
          <span className="ticket__text">{getDuration(first_duration)}</span>
        </div>
        <div className="time__second">
          <span className="ticket__header">В ПУТИ</span>
          <br />
          <span className="ticket__text">{getDuration(second_duration)}</span>
        </div>
      </div>
      <div className="transfer">
        <div className="transfer__first">
          <span className="ticket__header">{first_stops.length} ПЕРЕСАДКИ</span>
          <br />
          <span className="ticket__text">{first_stops_titles}</span>
        </div>
        <div className="transfer__second">
          <span className="ticket__header">{second_stops.length} ПЕРЕСАДКИ</span>
          <br />
          <span className="ticket__text">{second_stops_titles}</span>
        </div>
      </div>
    </div>
  )
}

export default Ticket
