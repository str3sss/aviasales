import { Button } from 'antd'
import ButtonGroup from 'antd/lib/button/button-group'
import { useDispatch } from 'react-redux'

import { sortTicketsByFlyDuration, sortTicketsByPrice, sortTicketsByOptimal } from '../../redux/ticketsSlice'

import './Tabs.scss'

const Tabs = () => {
  const dispatch = useDispatch()
  return (
    <ButtonGroup className="btns" size="large">
      <Button className="btn" onClick={() => dispatch(sortTicketsByPrice())}>
        САМЫЙ ДЕШЕВЫЙ
      </Button>
      <Button className="btn" onClick={() => dispatch(sortTicketsByFlyDuration())}>
        САМЫЙ БЫСТРЫЙ
      </Button>
      <Button className="btn" onClick={() => dispatch(sortTicketsByOptimal())}>
        ОПТИМАЛЬНЫЙ
      </Button>
    </ButtonGroup>
  )
}

export default Tabs
