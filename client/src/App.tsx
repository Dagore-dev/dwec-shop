import {
  Route
} from 'wouter'

import Navbar from './components/Navbar'
import Home from './views/Home'
import Cart from './views/Cart'

export default function App (): JSX.Element {
  return (
    <>
      <Navbar />

      <main className='p-20'>
        <Route path='/cart' component={Cart} />
        <Route path='/' component={Home} />
      </main>
    </>
  )
}
