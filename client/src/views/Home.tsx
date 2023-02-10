import useProducts from '../hooks/useProducts'
import ProductsGrid from '../components/ProductsGrid'

export default function Home (): JSX.Element {
  const [products, error] = useProducts()

  if (error) {
    return (
      <h2 className='text-4xl'>Tenemos problemas para recuperar los últimos productos</h2>
    )
  }

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
