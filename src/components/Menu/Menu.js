import { Checkbox } from 'antd'
import { useState } from 'react'
import './Menu.scss'
const CheckboxGroup = Checkbox.Group
const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']
const defaultCheckedList = ['Без пересадок']

const Menu = () => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList)
  const [checkAll, setCheckAll] = useState(false)

  const onChange = (list) => {
    setCheckedList(list)
    setCheckAll(list.length === plainOptions.length)
  }

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : [])
    setCheckAll(e.target.checked)
  }

  return (
    <menu className="menu">
      <p className="header">Количество пересадок</p>
      <Checkbox onChange={onCheckAllChange} checked={checkAll} onClick={() => console.log('все')}>
        Все
      </Checkbox>
      <CheckboxGroup
        style={{ display: 'flex', flexDirection: 'column' }}
        options={plainOptions}
        value={checkedList}
        onChange={onChange}
      >
        <h1>1</h1>
      </CheckboxGroup>
    </menu>
  )
}

export default Menu
