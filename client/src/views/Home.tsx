import { useEffect, useState } from 'react'
import ProductsGrid from '../components/ProductsGrid'
import { IProduct } from '../interfaces/IProduct'
import getAllProducts from '../services/getAllProducts'

export default function Home (): JSX.Element {
  const [products, setProducts] = useState<IProduct[] | undefined>()

  useEffect(() => {
    getAllProducts()
      .then(products => setProducts(products))
      .catch(error => console.log(error))
  }, [])

  if (products == null) {
    return (
      <>
        <h2 className='text-4xl'>Novedades</h2>
        <p>Cargando...</p>
      </>
    )
  }

  return (
    <>
      <h2 className='text-4xl'>Novedades</h2>

      <ProductsGrid listOfProducts={products} />
    </>
  )
}
