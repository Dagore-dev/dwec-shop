import { Link } from 'wouter'
import CartIcon from './CartIcon'

export default function Navbar (): JSX.Element {
  return (
    <header>
      <nav className='flex justify-between items-center fixed w-screen h-16 p-5 bg-slate-900 text-white'>
        <Link href='/'><h1 className='cursor-pointer'>Tienda online</h1></Link>
        <CartIcon quantity={3} />
      </nav>
    </header>
  )
}
