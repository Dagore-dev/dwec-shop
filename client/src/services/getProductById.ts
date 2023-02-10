import { IProduct } from '../interfaces/IProduct'

export default async function getProductById (id: number): Promise<IProduct> {
  const response = await window.fetch(`http://localhost:3000/products/${id}`)
  const data = await response.json()

  return data
}
