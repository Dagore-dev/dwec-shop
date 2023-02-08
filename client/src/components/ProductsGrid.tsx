import { IProduct } from '../interfaces/IProduct'
import Product from './Product'

interface Props {
  listOfProducts: IProduct[]
}

export default function ProductsGrid (props: Props): JSX.Element {
  const { listOfProducts } = props

  return (
    <div tabIndex={0} className='focus:outline-none'>
      <div className='mx-auto container py-8'>
        <div className='grid place-items-center grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4'>
          {
            listOfProducts.map(product => <Product key={crypto.randomUUID()} product={product} />)
          }
        </div>
      </div>
    </div>
  )
}
