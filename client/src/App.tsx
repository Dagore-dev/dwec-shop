import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './views/Home'
import Cart from './views/Cart'

export default function App (): JSX.Element {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route path='/cart' component={Cart} />
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}
