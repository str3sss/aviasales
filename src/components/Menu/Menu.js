import { Checkbox } from 'antd'
import { useDispatch } from 'react-redux'

import { changeTransfers } from '../../redux/ticketsSlice'
import './Menu.scss'

const Menu = ({ transfers = [] }) => {
  const dispatch = useDispatch()

  return (
    <menu className="menu">
      <p className="header">Количество пересадок</p>
      <Checkbox checked={transfers.length === 4} onClick={() => dispatch(changeTransfers(-1))} defaultChecked={true}>
        Все
      </Checkbox>
      <Checkbox checked={transfers.includes(0)} onClick={() => dispatch(changeTransfers(0))}>
        Без пересадок
      </Checkbox>
      <Checkbox checked={transfers.includes(1)} onClick={() => dispatch(changeTransfers(1))}>
        1 пересадка
      </Checkbox>
      <Checkbox checked={transfers.includes(2)} onClick={() => dispatch(changeTransfers(2))}>
        2 пересадки
      </Checkbox>
      <Checkbox checked={transfers.includes(3)} onClick={() => dispatch(changeTransfers(3))}>
        3 пересадки
      </Checkbox>
    </menu>
  )
}

export default Menu
