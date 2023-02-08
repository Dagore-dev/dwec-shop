import {
  Route,
  Switch
} from 'wouter'

import Navbar from './components/Navbar'
import Home from './views/Home'
import Cart from './views/Cart'
import NotFound from './views/NotFound'

export default function App (): JSX.Element {
  return (
    <>
      <Navbar />

      <main className='p-20'>
        <Switch>
          <Route path='/cart' component={Cart} />
          <Route path='/' component={Home} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </>
  )
}
