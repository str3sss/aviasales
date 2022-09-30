import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { store } from './redux/store'
import App from './components/App'

import 'antd/dist/antd.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
