import './Ticket.scss'
// import testLogo from '../../assets/img/S7.svg'

const Ticket = ({ carrier }) => {
  return (
    <div className="container">
      <div className="price">
        <span className="ticket__price">13 000 Р</span>
      </div>
      <div className="logo">
        <img src={`https://pics.avs.io/99/36/${carrier}.png`} align="rigth" />
      </div>
      <div className="path">
        <div className="path__first">
          <span className="ticket__header">MOW-HKT</span>
          <br />
          <span className="ticket__text">10:45-00:50</span>
        </div>
        <div className="path__second">
          <span className="ticket__header">MOW-HKT</span>
          <br />
          <span className="ticket__text">10:45-00:50</span>
        </div>
      </div>
      <div className="time">
        <div className="time__first">
          <span className="ticket__header">В ПУТИ</span>
          <br />
          <span className="ticket__text">21ч 15м</span>
        </div>
        <div className="time__second">
          <span className="ticket__header">В ПУТИ</span>
          <br />
          <span className="ticket__text">13ч 30м</span>
        </div>
      </div>
      <div className="transfer">
        <div className="transfer__first">
          <span className="ticket__header">2 ПЕРЕСАДКИ</span>
          <br />
          <span className="ticket__text">HKG</span>
        </div>
        <div className="transfer__second">
          <span className="ticket__header">2 ПЕРЕСАДКИ</span>
          <br />
          <span className="ticket__text">HKG</span>
        </div>
      </div>
    </div>
  )
}

export default Ticket
