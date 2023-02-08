import ProductsGrid from '../components/ProductsGrid'

export default function Home (): JSX.Element {
  return (
    <>
      <h2 className='text-4xl'>Novedades</h2>

      <ProductsGrid listOfProducts={[]} />
    </>
  )
}
