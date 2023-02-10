import { IProduct } from '../interfaces/IProduct'
import getAllProducts from '../services/getAllProducts'
import { useState, useEffect } from 'react'

export default function useProducts (): [IProduct[] | undefined, boolean] {
  const [products, setProducts] = useState<IProduct[] | undefined>()
  const [error, setError] = useState<string>('')

  useEffect(() => {
    getAllProducts()
      .then(products => {
        setError('')
        setProducts(products)
      })
      .catch(error => setError(error))
  }, [])

  return [products, error.length !== 0]
}
