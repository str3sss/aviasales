import { Button } from 'antd'
import ButtonGroup from 'antd/lib/button/button-group'
import './Tabs.scss'

const Tabs = () => {
  return (
    <ButtonGroup className="btns" size="large">
      <Button className="btn" onClick={() => console.log('самый дешевый')}>
        САМЫЙ ДЕШЕВЫЙ
      </Button>
      <Button className="btn" onClick={() => console.log('самый Быстрый')}>
        САМЫЙ БЫСТРЫЙ
      </Button>
      <Button className="btn" onClick={() => console.log('самый Оптимальный')}>
        ОПТИМАЛЬНЫЙ
      </Button>
    </ButtonGroup>
  )
}

export default Tabs
