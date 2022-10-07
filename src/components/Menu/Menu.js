import { Checkbox } from 'antd'
import { useDispatch } from 'react-redux'

import { changeTransfers } from '../../redux/ticketsSlice'
import './Menu.scss'

const TRANSFERS = { ALL: -1, NULL: 0, ONE: 1, TWO: 2, THREE: 3 }

const Menu = ({ transfers = [] }) => {
  const dispatch = useDispatch()

  return (
    <menu className="menu">
      <p className="header">Количество пересадок</p>
      <Checkbox
        checked={transfers.length === 4}
        onClick={() => dispatch(changeTransfers(TRANSFERS.ALL))}
        defaultChecked={true}
      >
        Все
      </Checkbox>
      <Checkbox checked={transfers.includes(TRANSFERS.NULL)} onClick={() => dispatch(changeTransfers(TRANSFERS.NULL))}>
        Без пересадок
      </Checkbox>
      <Checkbox checked={transfers.includes(TRANSFERS.ONE)} onClick={() => dispatch(changeTransfers(TRANSFERS.ONE))}>
        1 пересадка
      </Checkbox>
      <Checkbox checked={transfers.includes(TRANSFERS.TWO)} onClick={() => dispatch(changeTransfers(TRANSFERS.TWO))}>
        2 пересадки
      </Checkbox>
      <Checkbox
        checked={transfers.includes(TRANSFERS.THREE)}
        onClick={() => dispatch(changeTransfers(TRANSFERS.THREE))}
      >
        3 пересадки
      </Checkbox>
    </menu>
  )
}

export default Menu
