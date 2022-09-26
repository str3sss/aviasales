// import { useEffect, useState } from 'react'
import { Button, Skeleton } from 'antd'

import Menu from '../Menu'
import Tabs from '../Tabs'
import Ticket from '../Ticket'
import './App.scss'
import logo from '../../assets/img/Logo.svg'
import { UseGetTickets } from '../../hooks/useGetTickets'

function App() {
  const { stop, tickets } = UseGetTickets()
  const someTickets = tickets.slice(0, 5)

  if (!stop) {
    return (
      <main>
        <img src={logo} style={{ margin: '40px calc(50% - 41px)' }} sizes="10px" />
        <div className="main__container">
          <Menu />
          <Tabs />
          <Skeleton active className="container skeleton" round={true} />;
          <Skeleton active className="container skeleton" round={true} />;
          <Skeleton active className="container skeleton" round={true} />;
        </div>
      </main>
    )
  }

  return (
    <main>
      {console.log(someTickets[0])}
      <img src={logo} style={{ margin: '40px calc(50% - 41px)' }} sizes="10px" />
      <div className="main__container">
        <Menu />
        <Tabs />
        <Ticket carrier="EK" />
        <Ticket carrier="MH" />
        <Ticket carrier="EK" />
        <Ticket carrier="EY" />
        <Ticket carrier="SU" />
        <Button className="btns" type="primary" onClick={() => console.log('еще 5')}>
          Показать еще 5 билетов
        </Button>
      </div>
    </main>
  )
}

export default App
